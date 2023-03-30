const FRESH_ENDPOINT = process.env.FRESH_ENDPOINT;
export const fresh_url = (path: string) => `${FRESH_ENDPOINT}${path}`;
export const truncate = (str: string, n = 200) => {
  return str.length > n ? str.slice(0, n) + "..." : str;
};
export const convertToTitleCase = (inputString: string): string => {
  const words = inputString.split("_");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const outputString = capitalizedWords.join(" ");
  return outputString;
};
