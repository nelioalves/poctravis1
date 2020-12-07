import React from "react";
import { View, TextInput } from "react-native";
import { theme } from "../styles";

interface SearchProps {
  placeholder: string;
  search: string;
  setSearch: Function;
}

const SearchInput: React.FC<SearchProps> = ({
  placeholder,
  search,
  setSearch,
}) => {
  return (
    <View style={theme.inputContainer}>
      <TextInput
        style={theme.searchInput}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder={placeholder}
      />
    </View>
  );
};

export default SearchInput;
