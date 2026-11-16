const ACCENTED = "áàäâãéèëêíìïîóòöôõúùüûñç";
const PLAIN = "aaaaaeeeeiiiiooooouuuunc";

export function normalizeText(value: string): string {
  const lower = value.toLowerCase();
  let result = "";

  for (const char of lower) {
    const index = ACCENTED.indexOf(char);
    result += index === -1 ? char : PLAIN[index];
  }

  return result;
}
