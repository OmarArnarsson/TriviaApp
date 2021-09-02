import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import loadingAnimation from '../loading.gif';
import SingleQuestion from './SingleQuestion';


const VIEW_LIST = gql`
    query Categories($category: String!) {
        category(category: $category) {
            id
            category
            difficulty
            question
            correct_answer
        }
    }
`;

/* Sér um að taka við state-inu á dropdown og búa til Query hjá GraphQL */
export default function BuildView(props) {

    const { loading, error, data } = useQuery(VIEW_LIST, {
        variables: { category: props.value }
    });

    if (loading) return <img src={ loadingAnimation } alt="Loading..."/>;
    if (error) return `Error! ${error}`;

    return (
        <Fragment>
                {
                    data.category.map(question =>(
                        <SingleQuestion key={question.id} question={ question } />
                        ))
                }
        </Fragment>
    )
}
