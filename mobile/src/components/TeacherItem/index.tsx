import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import favoriteIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import styles from "./styles";

const TeacherItem: React.FC = () => {
  const uri =
    "https://media1.popsugar-assets.com/files/thumbor/BpzkP-JXS-ewX_9IaesNC5CUWTc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/08/24/833/n/1922398/3bb6df53599f224fe59635.58951946_edit_img_image_43931680_1503600332/i/Jared-Padalecki-Shirtless-Pictures.jpg";
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{ uri }} style={styles.avatar} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Jared Padalecki</Text>
          <Text style={styles.subject}>Caça</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        {"\n"}
        {"\n"}
        Esse tempore voluptas iusto quasi doloremque eum est dolorum alias
        temporibus, repellat numquam sequi mollitia ut corporis, eius dolore!
        Doloremque, cupiditate laborum.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "} <Text style={styles.priceValue}>R$ 200</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={favoriteIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Whatsapp</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
