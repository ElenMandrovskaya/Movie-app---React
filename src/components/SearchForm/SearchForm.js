import { Form, SubmitBtn, BtnLabel, Input } from "./SearchForm.styled";

export function SearchForm({ onSearch }) {
  const handleSearch = e => {
    e.preventDefault();
    if (e.target.elements.searchQuery.value.trim() === "") {
    //   toast.info('Please, enter query!');
      return
    }
    onSearch(e.target.elements.searchQuery.value.toLowerCase().trim());
    e.target.elements.searchQuery.value = "";
  };

    return (
          <Form
              onSubmit={handleSearch}>
                <SubmitBtn type="submit">
                    <BtnLabel>Search</BtnLabel>
                </SubmitBtn>
                <Input
                    name="searchQuery"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"/>
          </Form>
    );
}
