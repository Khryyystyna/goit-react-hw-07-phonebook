import React from "react";
import { Form } from "./Form/Form";
import { ContactsList } from './ContactsList/ContactsList'
import { Filter } from "./Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectIsLoading, selectError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

      return (
        <>
          <h1>Phonebook</h1>
          <Form />
          {isLoading && !error && <b>Request in progress...</b>}
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      )
    }

