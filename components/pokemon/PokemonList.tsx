import React, { useState } from 'react';

import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { localFavorites } from '../../utils';

interface Props {
  pokemon: Pokemon;
}

const PokemonList: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setInFavorites] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );

  const onToggleFavorites = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <>
      <Layout title={pokemon.name}>
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
          <Grid xs={12} sm={4}>
            <Card hoverable css={{ padding: '30px' }}>
              <Card.Body>
                <Card.Image
                  src={
                    pokemon.sprites.other?.dream_world.front_default ||
                    '/no-images.png'
                  }
                  alt={pokemon.name}
                  width="100%"
                  height={200}
                />
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header
                css={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Text h1 transform="capitalize">
                  {pokemon.name}
                </Text>
                <Button
                  color="gradient"
                  ghost={!isInFavorites}
                  onClick={onToggleFavorites}
                >
                  {isInFavorites ? 'En Favoritos' : 'Guardar en Favoritos'}
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites</Text>
                <Container direction="row" display="flex" gap={0}>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  );
};

export default PokemonList;
