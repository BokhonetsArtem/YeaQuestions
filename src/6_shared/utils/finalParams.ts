import type { QuestionsParams } from "../store/services/questionApi";

export const finalParams = (params: Partial<QuestionsParams>) => {
  const result: Record<string, string> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (Array.isArray(value) && value.length === 0) return;

    if (
      Array.isArray(value) &&
      typeof value[0] === "string" &&
      value[0].length === 0
    )
      return;

    const serverKey =
      key === "skillsIds"
        ? "skills"
        : key === "specializationId"
        ? "specialization"
        : key;

    result[serverKey] = Array.isArray(value) ? value.join(",") : String(value);
  });

  return result;
};
