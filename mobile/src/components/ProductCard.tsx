import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { text, theme } from "../styles";
import { useNavigation } from "@react-navigation/native";

interface ProductCardProps {
  id: Number;
  imgUrl: string;
  name: String;
  price: Number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imgUrl,
  name,
  price,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={theme.productCard}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Product Details", { id })}
    >
      <Image
        source={{ uri: imgUrl }}
        style={{ width: 140, height: 140, margin: 16 }}
      />
      <View style={theme.productDescription}>
        <Text style={text.productTitle}>{name}</Text>
        <View style={theme.priceContainer}>
          <Text style={text.currency}>R$</Text>
          <Text style={text.productPrice}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
