export type FamilyPersonData = {
  fn?: string;
  ln?: string;
  birthday?: string;
  avatar?: string;
  desc?: string;
  gender?: 'M' | 'F' | string;
};

export type FamilyRelations = {
  spouses?: string[];
  parents?: string[];
  children?: string[];
};

export type FamilyNode = {
  id: string;
  data?: FamilyPersonData;
  rels?: FamilyRelations;
};

export type FamilyTree = FamilyNode[];
