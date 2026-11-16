export const MAX_SEARCH_LENGTH = 40;
export const MAX_SEARCH_WORDS = 6;
export const MAX_SEARCH_DIGITS = 4;

const EXTRA_LETTERS =
  "áàäâãåāéèëêēíìïîīóòöôõøōúùüûūñçńæœßÁÀÄÂÃÅĀÉÈËÊĒÍÌÏÎĪÓÒÖÔÕØŌÚÙÜÛŪÑÇŃÆŒ";
const ALLOWED_SYMBOLS = ":-'.&";

export type SearchBlock = "characters" | "words" | "digits" | "symbols" | "empty";

export type SearchInputResult = {
  text: string;
  block: SearchBlock | null;
};

function isDigit(char: string): boolean {
  return char >= "0" && char <= "9";
}

function isAllowedCharacter(char: string): boolean {
  if (/[a-zA-Z0-9]/.test(char)) {
    return true;
  }

  return EXTRA_LETTERS.includes(char) || ALLOWED_SYMBOLS.includes(char);
}

function hasWordCharacter(value: string): boolean {
  for (const char of value) {
    if (/[a-zA-Z0-9]/.test(char) || EXTRA_LETTERS.includes(char)) {
      return true;
    }
  }

  return false;
}

export function sanitizeSearchInput(value: string): SearchInputResult {
  let cleaned = "";
  let digits = 0;
  let blockedInvalid = false;
  let blockedDigits = false;

  for (const char of value) {
    if (/\s/.test(char)) {
      cleaned += " ";
      continue;
    }

    if (!isAllowedCharacter(char)) {
      blockedInvalid = true;
      continue;
    }

    if (isDigit(char)) {
      if (digits === MAX_SEARCH_DIGITS) {
        blockedDigits = true;
        continue;
      }

      digits += 1;
    }

    cleaned += char;
  }

  cleaned = cleaned.replace(/ +/g, " ");

  const hadTrailingSpace = cleaned.endsWith(" ");
  const allWords = cleaned.trim().split(" ").filter(Boolean);
  const blockedWords =
    allWords.length > MAX_SEARCH_WORDS ||
    (hadTrailingSpace && allWords.length === MAX_SEARCH_WORDS);

  const words = allWords.slice(0, MAX_SEARCH_WORDS);
  let text = words.join(" ");
  const blockedCharacters = text.length > MAX_SEARCH_LENGTH;

  if (blockedCharacters) {
    text = text.slice(0, MAX_SEARCH_LENGTH).trimEnd();
  }

  const canKeepSpace =
    hadTrailingSpace &&
    words.length > 0 &&
    words.length < MAX_SEARCH_WORDS &&
    text.length < MAX_SEARCH_LENGTH;

  const withSpace = canKeepSpace ? `${text} ` : text;
  const hasWord = hasWordCharacter(withSpace);
  const finalText = hasWord ? withSpace : "";

  let block: SearchBlock | null = null;

  if (blockedCharacters) {
    block = "characters";
  } else if (blockedWords) {
    block = "words";
  } else if (blockedDigits) {
    block = "digits";
  } else if (blockedInvalid) {
    block = "symbols";
  } else if (!hasWord && value.trim() !== "") {
    block = "empty";
  }

  return { text: finalText, block };
}
