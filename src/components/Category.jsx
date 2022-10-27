import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Category = () => {
  return (
    <CategoryLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/Korean'}>
        <GiChopsticks />
        <h4>Korean</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
    </CategoryLink>
  );
};

const CategoryLink = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5rem;
  border-radius: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #004242, #00846a);
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  transform: scale(0.9);

  h4 {
    padding-top: 1rem;
    color: white;
    font-size: 0.9rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #ffc244, #ddcc44);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`;

export default Category;
