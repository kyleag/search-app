import { gql } from "apollo-boost";

export const GET_USERS = gql`
    query {
        users {
            firstName
            lastName
            properties {
                street
                city
                state
                zip
                rent
            }
        }
    }
`;

export const SEARCH_RESULTS = gql`
    query SearchResults ($input: String!) {
        search(query: $input) {
          users {
            firstName
            lastName
            properties {
                street
                city
                state
                zip
                rent
            }
          }
          properties {
            street
            city
            state
            zip
            rent
          }
        }
    }
`;

export const AUTOSUGGEST = gql`
    query AutosuggestResult ($input: String!) {
        autosuggest(query: $input) {
          users
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!) {
        createUser(firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`;