export const simplifyId = (text) =>
{
    if(!isNaN(text[0]))
    {
        text = "a"+text
    }
    text = text.replace(/&/ig,"and")
    // text = text.replace(/-/ig,"_")

    return text
}