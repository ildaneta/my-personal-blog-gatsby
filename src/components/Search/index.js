import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';
import Hit from './Hit';

import * as s from './style.js';

const Search = () => {
  const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_ONLY_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
  };

  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

  return (
    <s.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox autoFocus translations={{ placeholder: 'Pesquisar...' }} />

        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`;
            },
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </s.SearchWrapper>
  );
};

export default Search;
