import type { ISkill } from "../../skills";
import type { ISpecialization } from "../../specialization";

export interface IQuestion {
  id: string;
  rate: number;
  title: string;
  imageSrc: string;
  questionSkills: ISkill[];
  complexity: number;
  longAnswer: string;
  keywords: string[];
  description: string;
  shortAnswer: string;
  specializations: ISpecialization[];
}

export type QuestionsParams = {
  page: number;
  limit: number;
  rate: number[];
  keywords: string[];
  skillsIds: string[];
  complexity: number[];
  specializationId: number | null;
};

export type QuestionsResponse = {
  data: IQuestion[];
  total: number;
};
