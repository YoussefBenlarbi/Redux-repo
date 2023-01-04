import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AfficherFiliere() {
  const [filiere, setFiliere] = useState('');
  const [msg, setMsg] = useState('');
  const [listFiliere, setListFiliere] = useState([]);
  const list = useSelector((state) => state);
  function SearchFiliere() {
    setListFiliere(list.filter((elm) => elm.filiere == filiere));
    filiere.trim() === ''
      ? setMsg('Veuiller Saisir Fillier ')
      : listFiliere.length === 0
      ? setMsg('Array is Empty')
      : setMsg('');
  }

  return (
    <div>
        <h2>Chercher Stagiaire par Filiere :</h2>
      <div>
        Saisir le nom de Filiere :{' '}
        <input
          type="text"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
        />
      </div>
      <br /> 
      {listFiliere.length === 0  ? (
        <p>{msg}</p>
      ) : (
        <table className='Tablo'>
          <tr>
            <th>Id :</th>
            <th>Nom :</th>
            <th>Filiere :</th>
          </tr>
          {listFiliere.map((elm) => (
            <tr>
              <td>{elm.id}</td>
              <td>{elm.nom}</td>
              <td>{elm.filiere}</td>
            </tr>
          ))}
        </table>
      )}
      <br />
      <button onClick={() => SearchFiliere()}>Search</button>
    </div>
  );
}

export default AfficherFiliere;
