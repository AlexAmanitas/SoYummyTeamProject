import { useNavigate } from 'react-router-dom';

import { usePopular } from 'api/hooks';
import { Loader } from 'components/Loader';

import { SectionTitle } from 'commonComponents/SectionTitle';
import {
  ListBox,
  RecipeItem,
  ImageBox,
  TextBox,
  TitleBox,
  AboutBox,
} from './PopularRecipe.styled';

export const PopularRecipe = () => {
  const { data, isLoading } = usePopular();

  return (
    <>
      <SectionTitle>Popular recipe</SectionTitle>
      <ListBox>
        {isLoading ? (
          <Loader />
        ) : (
          data.slice(0, 4).map(item => <Item key={item._id} {...item} />)
        )}
      </ListBox>
    </>
  );
};

const Item = ({ preview, title, description, _id }) => {
  const navigate = useNavigate();
  const handlerOnClick = () => {
    navigate(`/recipe/${_id}`);
  };

  return (
    <RecipeItem onClick={handlerOnClick}>
      <ImageBox src={preview} alt={title} width={90} />
      <TextBox>
        <TitleBox>{title}</TitleBox>
        <AboutBox>{description}</AboutBox>
      </TextBox>
    </RecipeItem>
  );
};
