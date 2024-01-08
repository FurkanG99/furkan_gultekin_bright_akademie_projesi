import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ posts, setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResultsLocal] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term) {
      setSearchResultsLocal([]);
    } else {
      const resultsArray = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.body.toLowerCase().includes(term)
      );

      setSearchResultsLocal(resultsArray);
    }
  };

  const handleResultClick = (pageId) => {
    // Burada sayfa yönlendirmesi yapılabilir veya başka bir işlem gerçekleştirilebilir.
    console.log(`Clicked on post with ID ${pageId}`);
    // Sayfa değişikliği işlemi
    navigate(`/Pages/InfoPage/${pageId}`);
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Ara..."
        className="me-2 search-input"
        onChange={handleSearchChange}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      {/* Örnek bir arama sonuçları listesi */}
      <ul className="search-results">
        {searchResults.map((result) => (
          <li key={result.id} onClick={() => handleResultClick(result.id)}>
            {result.title}
          </li>
        ))}
      </ul>
    </Form>
  );
};

export default SearchBar;
