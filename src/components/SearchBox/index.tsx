import React, { ChangeEventHandler } from 'react'
import './index.styles.scss'
type Props = {
	onChangeHandler: ChangeEventHandler<HTMLInputElement>
	placeholder?: string;
}

const SearchBox = ({onChangeHandler, placeholder}: Props) => {
  return (
    <form>
      <input type="search" placeholder={placeholder} onChange={onChangeHandler} />
    </form>
  );
}

export { SearchBox }