import React from "react";
import "./Search.css";
import { useModal } from "../Hook/Hook";
import { Modal } from "../Modal/Modal";

const Search = ({ handleOnChange, handleOnSubmit, Busqueda }) => {
    const [isOpen, OpenModal, CloseModal] = useModal(false);

    return (
        <section className="search">
            <div className="search__item">
                <button className="button" onClick={OpenModal}>
                    Fav
                </button>
                <Modal isOpen={isOpen} CloseModal={CloseModal}>
                    <div>Solo text por el momemt</div>
                </Modal>
                <input
                    type="text"
                    placeholder="..."
                    onChange={handleOnChange}
                    value={Busqueda}
                />
                <div className="search-btn">
                    <button type="submit" onClick={handleOnSubmit}>
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Search;