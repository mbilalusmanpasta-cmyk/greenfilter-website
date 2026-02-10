import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { statics } from "../data/store";
import FilterSelect from "./FilterSelect";
import PrimaryButton from "./PrimaryButton";

const filterKeys = ["make", "name", "engine"];

function compare(a, b, key) {
  if (a[key] < b[key]) return -1;
  if (a[key] > b[key]) return 1;
  return 0;
}

/**
 * Floating filter card with brand accent border.
 * Progressive disclosure: Make/Model/Engine unlock after Year selected.
 * Skeleton loading for dropdowns.
 */
const VehicleFilterCard = ({ onResults, className = "" }) => {
  const history = useHistory();
  const [apiStr, setApiStr] = useState({
    year: "",
    make_id: "",
    model_name: "",
    engine: "",
  });
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState({ year: false, make: false, model: false, engine: false });
  const [loadingOptions, setLoadingOptions] = useState(true);

  const yearOptions = React.useMemo(() => {
    const end = new Date().getFullYear();
    const start = 1959;
    const arr = [];
    for (let y = end; y >= start; y--) arr.push({ value: y.toString(), label: y.toString() });
    return arr;
  }, []);

  useEffect(() => {
    setLoadingOptions(false);
  }, []);

  useEffect(() => {
    if (!apiStr.year || apiStr.year === "-1" || apiStr.year === "") return;
    const idx = [apiStr.year, apiStr.make_id, apiStr.model_name, apiStr.engine].findIndex(
      (v) => !v || v === "-1"
    );
    const key = filterKeys[idx - 1];
    if (idx <= 0) return;

    setLoading((p) => ({ ...p, [key]: true }));
    axios
      .get(statics.BaseUrl + "/product-search", { params: apiStr })
      .then((res) => {
        const data = res?.data?.data ?? [];
        const getKey = filterKeys[idx - 1];
        let filtered = data;
        if (getKey === "engine") filtered.sort((a, b) => compare(a, b, "displacement"));
        else if (getKey === "make" || getKey === "name")
          filtered.sort((a, b) => compare(a, b, "name"));
        setApiData((prev) => ({ ...prev, [getKey]: filtered }));
      })
      .catch(() => setApiData((prev) => ({ ...prev, [filterKeys[idx - 1]]: [] })))
      .finally(() => setLoading((p) => ({ ...p, [key]: false })));
  }, [apiStr]);

  const makeOptions = (apiData.make || []).map((m) => ({ value: m.id?.toString(), label: m.title }));
  const modelOptions = (apiData.name || []).map((n) => ({ value: n.name, label: n.title || n.name }));
  const engineOptions = (apiData.engine || []).map((e) => ({
    value: e.displacement,
    label: e.displacement,
  }));

  const handleChange = (key, value) => {
    const order = ["year", "make_id", "model_name", "engine"];
    const idx = order.indexOf(key);
    const next = { ...apiStr, [key]: value };
    order.slice(idx + 1).forEach((k) => (next[k] = ""));
    const clear = {};
    order.slice(idx + 1).forEach((k) => (clear[k] = []));
    setApiData((p) => ({ ...p, ...clear }));
    setApiStr(next);
    onResults?.(null);
  };

  const canSearch =
    apiStr.year &&
    apiStr.year !== "-1" &&
    apiStr.make_id &&
    apiStr.make_id !== "-1" &&
    apiStr.model_name &&
    apiStr.model_name !== "-1" &&
    apiStr.engine &&
    apiStr.engine !== "-1";

  const handleGo = () => {
    if (!canSearch) return;
    setLoading((p) => ({ ...p, engine: true }));
    axios
      .get(statics.BaseUrl + "/product-search", { params: apiStr })
      .then((res) => {
        const data = res?.data?.data ?? [];
        onResults?.(data);
        if (data.length > 0 && data[0]?.id) {
          history.push(`/store/filter/${data[0].id}`);
        }
      })
      .finally(() => setLoading((p) => ({ ...p, engine: false })));
  };

  return (
    <div
      className={`
        relative rounded-2xl p-5 sm:p-6 bg-brand-card/95 backdrop-blur
        border-2 border-brand shadow-2xl
        ${className}
      `}
    >
      <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Find a Filter</h3>
      <div className="space-y-4">
        <FilterSelect
          id="filter-year"
          label="Year"
          placeholder="Select Year"
          value={apiStr.year}
          options={yearOptions}
          onChange={(v) => handleChange("year", v)}
          loading={loadingOptions}
        />
        <FilterSelect
          id="filter-make"
          label="Make"
          placeholder="Select Make"
          value={apiStr.make_id}
          options={makeOptions}
          onChange={(v) => handleChange("make_id", v)}
          disabled={!apiStr.year || apiStr.year === "-1"}
          loading={loading.make}
        />
        <FilterSelect
          id="filter-model"
          label="Model"
          placeholder="Select Model"
          value={apiStr.model_name}
          options={modelOptions}
          onChange={(v) => handleChange("model_name", v)}
          disabled={!apiStr.make_id || apiStr.make_id === "-1"}
          loading={loading.model}
        />
        <FilterSelect
          id="filter-engine"
          label="Engine"
          placeholder="Select Engine"
          value={apiStr.engine}
          options={engineOptions}
          onChange={(v) => handleChange("engine", v)}
          disabled={!apiStr.model_name || apiStr.model_name === "-1"}
          loading={loading.engine}
        />
      </div>
      <div className="mt-5">
        <PrimaryButton
          onClick={handleGo}
          disabled={!canSearch || loading.engine}
        >
          {loading.engine ? "Finding..." : "Find Your Filter"}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default VehicleFilterCard;
