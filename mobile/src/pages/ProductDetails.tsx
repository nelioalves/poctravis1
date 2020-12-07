import React, { useState, useEffect } from "react";
import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { api } from "../services";
import { text, theme } from "../styles";

import arrow from "../assets/leftArrow.png";

interface ProductDetailProps {
  route: Object;
  params: Object;
  id: Number;
}

const ProductDetails: React.FC<ProductDetailProps> = ({
  route: {
    params: { id },
  },
}) => {
  const navigation = useNavigation();
  const [product, setProduct] = useState({
    id: null,
    name: null,
    description: null,
    price: null,
    imgUrl: null,
    date: null,
    categories: [],
  });

  const [loading, setLoading] = useState(false);

  async function loadProductData() {
    setLoading(true);
    const res = await api.get(`products/${id}`);
    setProduct(res.data);
    setLoading(false);
  }

  useEffect(() => {
    loadProductData();
  }, []);
  return (
    <View style={theme.detailContainer}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={theme.detailCard}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={theme.gobackContainer}
          >
            <Image source={arrow} />
            <Text style={text.goBackText}>VOLTAR</Text>
          </TouchableOpacity>
          <View style={theme.productImageContainer}>
            <Image
              source={{ uri: product.imgUrl }}
              style={theme.productImage}
            />
          </View>

          <Text style={text.productDetailTitle}>{product.name}</Text>
          <View style={theme.priceContainer}>
            <Text style={text.currency}>R$</Text>
            <Text style={text.productPrice}>{product.price}</Text>
          </View>
          <ScrollView style={theme.scrollTextContainer}>
            <Text style={text.productDescription}>{product.description}</Text>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default ProductDetails;
