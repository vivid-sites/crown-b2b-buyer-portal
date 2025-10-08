import B3Request from '../../request/b3Fetch';

const customFields = (data: CustomFieldItems) => `query getCustomFields {
  site {
    products(entityIds: [${data.productIds || []}]) {
      edges {
        node {
          customFields {
            edges {
              node {
                name
                value
              }
            }
            pageInfo {
              hasNextPage
              startCursor
              endCursor
              hasPreviousPage
            }
          }
          entityId
        }
      }
    }
  }
}`;

const getCustomFields = (data: CustomFieldItems) =>
  B3Request.graphqlBCProxy({
    query: customFields(data),
  });

export { getCustomFields };
