// @flow
export type Character = {
  id: number,
  description: string,
  name: string,
  modified: Date,
  thumbnail: {
    path: string,
    extension: string,
  },
};

export type Comic = {
  title: string,
  description: string,
  issueNumber: number,
  thumbnail: {
    path: string,
    extension: string,
  },
};