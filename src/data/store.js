const form1 = [
  {
    id: 0,
    name: "firstName",
    type: "text",
    value: "",
    label: "First Name",
  },
  {
    id: 1,
    name: "state",
    type: "text",
    value: "",
    label: "State",
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    value: "",
    label: "Last Name",
  },
  {
    id: 3,
    name: "Zip",
    type: "text",
    value: "",
    label: "Zip",
  },
  {
    id: 4,
    name: "email",
    type: "text",
    value: "",
    label: "Email Address",
  },
  {
    id: 5,
    name: "part#",
    type: "text",
    value: "",
    label: "Part#",
  },
  {
    id: 6,
    name: "phone",
    type: "text",
    value: "",
    label: "Phone",
  },
  {
    id: 7,
    name: "purchaseDate",
    type: "text",
    value: "",
    label: "Purchase Date",
  },
  {
    id: 8,
    name: "streetAddress",
    type: "text",
    value: "",
    label: "Street Address",
  },
  {
    id: 9,
    name: "purchaseLocation",
    type: "text",
    value: "",
    label: "Purchase Location",
  },
  {
    id: 10,
    name: "apt",
    type: "text",
    value: "",
    label: "Apt",
  },
  {
    id: 11,
    name: "vehicleYear",
    type: "text",
    value: "",
    label: "Vehicle Year",
  },
  {
    id: 12,
    name: "city",
    type: "text",
    value: "",
    label: "City",
  },
  {
    id: 13,
    name: "vehicleModel",
    type: "text",
    value: "",
    label: "Vehicle Model",
  },
];
const form2 = [
  {
    id: 0,
    name: "name",
    type: "text",
    value: "",
    label: "Name",
  },
  {
    id: 1,
    name: "email",
    type: "text",
    value: "",
    label: "Email Address",
  },
  {
    id: 2,
    name: "phone",
    type: "text",
    value: "",
    label: "Phone",
  },
  {
    id: 3,
    name: "message",
    type: "text",
    value: "",
    label: "Message (Include your car make & model)",
  },
];

export const statics = {
  BaseUrl: "https://greenfilter-backend-production.herokuapp.com"
}

const MakeCollection =   {name:"make",label:"Make",slug:"brands"},
ModelCollection =   {name:"model",label:"Model",slug:"model"},
ProductCollection =   {name:"product",label:"Product",slug:"item"};

export const getMakeCollection = () =>
{
  return MakeCollection;
}
export const getModelCollection = () =>
{
  return ModelCollection;
}
export const getProductCollection = () =>
{
  return ProductCollection;
}

export const collectionCategories = [
  getMakeCollection(),
  getModelCollection(),
  getProductCollection()
]

export const getCollectionCategories = () =>
{
  return collectionCategories;
}

export const getForm1 = () => {
  const formData = JSON.parse(JSON.stringify(form1));
  return formData;
};

export const getForm2 = () => {
  const formData = JSON.parse(JSON.stringify(form2));
  return formData;
};
