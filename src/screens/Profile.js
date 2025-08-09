import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const user = {
    name: 'Olivia',
    email: 'Olivia@gmail.com',
    avatar: require('../../assets/avatar.png'), // Add your avatar image
  };

  const menuItems1 = [
    { title: 'Address', subtitle: 'Manage your saved address', icon: 'location-outline', screen: 'Address' },
    { title: 'Order History', subtitle: 'View your past orders', icon: 'receipt-outline', screen: 'Orders' },
    { title: 'Language', icon: 'language-outline', screen: 'Language' },
    { title: 'Notifications', icon: 'notifications-outline', screen: 'Notifications' },
  ];

  const menuItems2 = [
    { title: 'Contact Us', icon: 'call-outline', screen: 'Contact' },
    { title: 'Get Help', icon: 'help-circle-outline', screen: 'Help' },
    { title: 'Privacy Policy', icon: 'lock-closed-outline', screen: 'PrivacyPolicy' },
    { title: 'Terms and Conditions', icon: 'document-text-outline', screen: 'Terms' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={user.avatar} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
        <TouchableOpacity>
          <Feather name="edit-2" size={18} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Menu Section 1 */}
      <View style={styles.section}>
        {menuItems1.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Ionicons name={item.icon} size={20} color="#000" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              {item.subtitle && <Text style={styles.menuSubtitle}>{item.subtitle}</Text>}
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={22} color="#000" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Menu Section 2 */}
      <View style={styles.section}>
        {menuItems2.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Ionicons name={item.icon} size={20} color="#000" />
            <Text style={styles.menuTitle}>{item.title}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={22} color="#000" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('Login')}>
        <Ionicons name="log-out-outline" size={20} color="red" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3F0',
    paddingHorizontal: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE7E1',
    padding: 16,
    borderRadius: 12,
    marginVertical: 16,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    marginLeft: 10,
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#777',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  logoutText: {
    fontSize: 16,
    color: 'red',
    marginLeft: 8,
  },
});
