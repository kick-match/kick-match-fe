import { gql } from '@apollo/client'

export const LOAD_ALL_TALENT = gql `
    query {
      allTalent {
        id
        name
      }
    }
  `