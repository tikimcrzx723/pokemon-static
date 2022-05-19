import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import FavoritePokemons from '../../components/pokemon/FavoritePokemons';
import NoFavorites from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';

const FavoritesPages = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);
  return (
    <Layout title="Pokémons - Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPages;
