import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Recipe() {
  let params = useParams();
  const [details, setDetails] = React.useState({});
  const [activeTab, setActiveTab] = React.useState('instructions');

  React.useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
      );
      const detailData = await data.json();
      setDetails(detailData);
    };
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  .active {
    background: linear-gradient(35deg, #004242, #00846a);
    color: white;
  }
`;

const Button = styled.button`
  border-radius: 1rem;
  padding: 1rem 1.2rem;
  color: #00846a;
  background: white;
  border: 2px solid #00846a;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
