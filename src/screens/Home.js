import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      let res = await fetch("https://dummyjson.com/products");
      let json = await res.json();
      setProducts(json.products);
    } catch (error) {
      console.log("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Viora</Text>
        <View style={styles.headerIcons}>
          <Icon name="search-outline" size={22} color="#000" style={{ marginRight: 10 }} />
          <Icon name="cart-outline" size={22} color="#000" />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search-outline" size={20} color="#999" />
        <TextInput
          placeholder="Search for all products"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Section Title */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Best Products</Text>
          <Text style={styles.sectionSubtitle}>{filteredProducts.length} products</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      {loading ? (
        <ActivityIndicator size="large" color="#b76e79" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={styles.productList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FDEDEC", paddingHorizontal: 15 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
  },
  logo: { fontSize: 20, fontWeight: "bold", color: "#b76e79" },
  headerIcons: { flexDirection: "row", alignItems: "center" },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    height: 40,
  },
  searchInput: { flex: 1, marginLeft: 5, fontSize: 14 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  sectionTitle: { fontSize: 16, fontWeight: "bold", color: "#000" },
  sectionSubtitle: { fontSize: 12, color: "#777" },
  filterButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
  },
  filterText: { fontSize: 12, color: "#000" },
  productList: { marginTop: 15, paddingBottom: 80 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 8,
    marginBottom: 15,
    width: "48%",
  },
  productImage: { width: "100%", height: 120, borderRadius: 8 },
  productName: { fontSize: 14, fontWeight: "500", marginTop: 8, color: "#000" },
  productPrice: { fontSize: 13, fontWeight: "bold", color: "#000", marginTop: 2 },
});
