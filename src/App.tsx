import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { CardList } from './components/CardList';
import { SearchBox } from './components/SearchBox';
import { getData } from './utils/FetchData';
import { Monster } from './@types/rolodex.types'
import './index.scss'

const App: FC = () => {
  let url: string = `https://jsonplaceholder.typicode.com/users`;
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
      const fetchUsers = async () => {
        const users = await getData<Monster[]>(url);
        setMonsters(users);
      };
      fetchUsers();
      return () => console.log('clean up!');
  }, [searchField, url]);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    setFilteredMonsters(newFilteredMonsters);
    return () => {
      console.log('clean up!');
    };
  }, [monsters, searchField]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    const { target } = e;
    const searchStr: string = target.value;
    setSearchField(searchStr);
  };

  return (
    <>
      <SearchBox onChangeHandler={onSearch} placeholder={'Search'} />
      <CardList monsters={filteredMonsters} />
    </>
  );
};

export default App;
