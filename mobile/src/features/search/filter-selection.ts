export const MAX_GENRE_FILTERS = 2;
export const MAX_PLATFORM_FILTERS = 2;
export const MAX_YEAR_FILTERS = 1;

export function toggleSelection(current: string[], value: string, max: number): string[] {
  if (current.includes(value)) {
    return current.filter((item) => item !== value);
  }

  if (current.length < max) {
    return [...current, value];
  }

  return [...current.slice(1), value];
}
