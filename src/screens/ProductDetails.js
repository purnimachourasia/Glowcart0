// screens/ProductDetailsScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";

export default function ProductDetailsScreen({ navigation }) {
  const route = useRoute();
  const { product } = route.params;

  // Mock reviews
  const reviews = [
    {
      id: 1,
      name: "Eleanor Collins",
      email: "eleanor.collins@gmail.com",
      rating: 2,
      comment: "Would not recommend...",
      avatar:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 2,
      name: "Lucas Gordon",
      email: "lucas.gordon@gmail.com",
      rating: 4,
      comment: "Very satisfied!",
      avatar:
        "https://randomuser.me/api/portraits/men/72.jpg",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Top Image */}
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>

        <Image source={{ uri: product.thumbnail }} style={styles.productImage} />

        <TouchableOpacity style={styles.cartBtn}>
          <Icon name="cart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.similarBtn}>
          <Text style={styles.similarText}>View Similar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>
          {product.description}
        </Text>

        <View style={styles.ratingRow}>
          <Icon name="star" size={16} color="#FFD700" />
          <Icon name="star" size={16} color="#FFD700" />
          <Icon name="star-outline" size={16} color="#FFD700" />
          <Text style={styles.ratingText}> 2.56/5</Text>
        </View>

        <Text style={styles.seller}>Sold by : <Text style={{ fontWeight: "600" }}>Essence</Text></Text>

        {/* Price Row */}
        <View style={styles.priceRow}>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.oldPrice}>$10.48</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addText}>Add to Bag</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Highlights */}
      <View style={styles.highlights}>
        <Text style={styles.highlightTitle}>Highlights</Text>
        <View style={styles.highlightRow}>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightValue}>15.14</Text>
            <Text style={styles.highlightLabel}>Width</Text>
          </View>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightValue}>13.08</Text>
            <Text style={styles.highlightLabel}>Height</Text>
          </View>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightValue}>1 week</Text>
            <Text style={styles.highlightLabel}>Warranty</Text>
          </View>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightValue}>3-5 days</Text>
            <Text style={styles.highlightLabel}>Shipping</Text>
          </View>
        </View>
      </View>

      {/* Ratings & Reviews */}
      <View style={styles.reviews}>
        <Text style={styles.reviewTitle}>Ratings & Reviews</Text>
        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <Image source={{ uri: review.avatar }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.reviewName}>{review.name}</Text>
              <Text style={styles.reviewEmail}>{review.email}</Text>
              <View style={styles.starsRow}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name={i < review.rating ? "star" : "star-outline"}
                    size={14}
                    color="#FFD700"
                  />
                ))}
              </View>
              <Text style={styles.reviewComment}>{review.comment}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FDEDED" },
  imageContainer: { position: "relative", backgroundColor: "#FDEDED" },
  productImage: {
    width: "100%",
    height: 280,
    resizeMode: "cover",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  backBtn: { position: "absolute", top: 40, left: 20, zIndex: 2, backgroundColor: "#fff", borderRadius: 20, padding: 5 },
  cartBtn: { position: "absolute", top: 40, right: 20, zIndex: 2, backgroundColor: "#fff", borderRadius: 20, padding: 5 },
  infoContainer: { padding: 16 },
  similarBtn: { backgroundColor: "#FCDCDC", alignSelf: "flex-start", borderRadius: 5, paddingHorizontal: 8, paddingVertical: 4, marginBottom: 8 },
  similarText: { color: "#D46A6A", fontSize: 12 },
  title: { fontSize: 18, fontWeight: "600", color: "#000" },
  description: { fontSize: 14, color: "#555", marginVertical: 6 },
  ratingRow: { flexDirection: "row", alignItems: "center", marginVertical: 4 },
  ratingText: { fontSize: 14, color: "#000" },
  seller: { fontSize: 14, marginVertical: 6 },
  priceRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  price: { fontSize: 18, fontWeight: "bold", color: "#000" },
  oldPrice: { fontSize: 14, color: "#999", textDecorationLine: "line-through", marginLeft: 8 },
  addBtn: { backgroundColor: "#C05050", paddingVertical: 8, paddingHorizontal: 20, borderRadius: 6, marginLeft: "auto" },
  addText: { color: "#fff", fontWeight: "600" },
  highlights: { backgroundColor: "#fff", padding: 16, margin: 16, borderRadius: 10 },
  highlightTitle: { fontWeight: "600", fontSize: 16, marginBottom: 8 },
  highlightRow: { flexDirection: "row", justifyContent: "space-between" },
  highlightItem: { alignItems: "center" },
  highlightValue: { fontWeight: "bold", fontSize: 14 },
  highlightLabel: { fontSize: 12, color: "#555" },
  reviews: { padding: 16 },
  reviewTitle: { fontWeight: "600", fontSize: 16, marginBottom: 8 },
  reviewCard: { flexDirection: "row", backgroundColor: "#fff", padding: 10, borderRadius: 10, marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  reviewName: { fontWeight: "600", fontSize: 14 },
  reviewEmail: { fontSize: 12, color: "#777" },
  starsRow: { flexDirection: "row", marginVertical: 2 },
  reviewComment: { fontSize: 12, color: "#000" },
});
