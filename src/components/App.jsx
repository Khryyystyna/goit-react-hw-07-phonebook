import React from "react";
import { Form } from "./Form/Form";
import { ContactsList } from './ContactsList/ContactsList'
import { Filter } from "./Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectIsLoading, selectError, selectContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 && <ContactsList />}
      {isLoading && !error && <b>Request in progress...</b>}
    </>
  )
}

