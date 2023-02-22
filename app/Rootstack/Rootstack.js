import React from "react";
import { View, Image } from "react-native";
import Posts from "../Pages/Post";
import { NavigationContainer } from "@react-navigation/native";
import Landing from "../Pages/Landing";
import { Ionicons } from "@expo/vector-icons";
import MainScreen from "../Pages/MainScreen";
import Mobillogin from "../Pages/MobileLogin";
import UserInfoTwo from "../Pages/UserInfoEdit";
import SelectRole from "../Pages/Roleslectionpage";
import OtpScreen from "../Pages/Otpscreen";
import JobposterDetails from "../Pages/jobPoster";
import UserProfileEdit from "../Pages/ProfileEdit";
import Phoneinput from "../components/phoneinput";
import { useContext } from "react";
import UserInfo from "../Pages/USerInfo";
import SwiperCard from "../Pages/Post";
import Jobseeker from "../Pages/jobseekerDeatils";
import BottomTAb, {
  Filterscreenmain,
  JobProviderBottomTAb,
  ModifyHome,
  Rentalproviderbottomtab,
  Rentalseekerbottomtab,
} from "./RootTabnav";
import Top from "../components/Topcontainer";
import MessageSelect from "../Pages/message/MessageSelect";
import ShortTermRental from "../Pages/Rentalshort";
import DropDownLanguage from "../components/dropdown/DropDownLanguage";
import Maincategory from "../components/Maincategory/Maincategory";
import SelectCategory from "../components/Maincategory/Selectcategory";
import { Feather } from "@expo/vector-icons";
import { LocalizationContext } from "../../App";
import SelectCategoryform from "../components/Maincategory/Selectcategoryform";
import Userprofile from "../Pages/Userprofile";
import Workexperience from "../Pages/Workexperience";
import EduInfo from "../Pages/Educationprofile";
import Profilepage from "../Pages/Mainprofile";
import Sign from "../Pages/Longform";
import ShortTermForms from "../Pages/ShortTermform";
import PersonProfilepage from "../Pages/Personalprofile";
import { createStackNavigator } from "@react-navigation/stack";
import RentalSwiperCard from "../Pages/Rental/Rentalswipe";
import Jobmainselect from "../Pages/jobprovider/Jobtermchoose";
import Faq from "../components/Documentation/Faq.js";
import Termscondition from "../components/Documentation/Terms&condition";
import Privacypolicy from "../components/Documentation/Privacypolicy";
const Stack = createStackNavigator();

function CustomHeaderBackImage({ tintColor }) {
  return <Feather name="home" size={34} color="black" />;
}
function Root() {
  console.log("inside Root");
  console.log(LocalizationContext);
  const { language, t, setlanguage } = useContext(LocalizationContext);
  console.log(language);
  const MyTheme = {
    dark: false,
    colors: {
      border: "#f2f2f2",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="botnav">
        <Stack.Screen
          name="botnav"
          component={BottomTAb}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="short" component={ShortTermForms} />
        <Stack.Screen name="Long" component={Sign} />
        <Stack.Screen
          name="Rent"
          component={ShortTermRental}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="jobprovidebottamtab"
          component={JobProviderBottomTAb}
          options={{
            title: <Top />,
            headerBackImage: ({ tintColor }) => (
              <CustomHeaderBackImage tintColor={tintColor} />
            ),
          }}
          // headerMode="screen"
          // options={{
          //   headerShown: true,
          // headerBackImage: () => {
          //   <Feather name="home" size={24} color="black" />;
          // },
          // // headerStyle: { backgroundColor: "#000000", height: RFValue(102) },
          // // headerTintStyle: { fontWeight: "bold" },
          // // headerTitleStyle: {
          // //   marginLeft: RFValue(72),
          // //   fontFamily: "Aldrich-Regular",
          // //   color: "white",
          // // },
          // }}
        ></Stack.Screen>
        <Stack.Screen
          name="rentalseekerbottamtab"
          component={Rentalseekerbottomtab}
          options={{
            title: <Top />,
            headerBackImage: ({ tintColor }) => (
              <CustomHeaderBackImage tintColor={tintColor} />
            ),
          }}
        />
        <Stack.Screen
          name="rentalproviderbottamtab"
          component={Rentalproviderbottomtab}
          options={{
            title: <Top />,
            headerBackImage: ({ tintColor }) => (
              <CustomHeaderBackImage tintColor={tintColor} />
            ),
          }}
        />
        {/* <Stack.Screen
          name="category"
          component={Maincategory}
          options={{ headerShown: false }}
        ></Stack.Screen> */}
        <Stack.Screen
          name="SelectCategory"
          component={SelectCategory}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="SelectCategoryform"
          component={SelectCategoryform}
          options={{ headerShown: true }}
        ></Stack.Screen>
        <Stack.Screen
          name="Jobmainselect"
          component={Jobmainselect}
          options={{
            title: <Top />,
            headerBackImage: ({ tintColor }) => (
              <CustomHeaderBackImage tintColor={tintColor} />
            ),
          }}
        />
        <Stack.Screen
          name="Home"
          component={Mobillogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Faq"
          component={Faq}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Termscondition"
          component={Termscondition}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Privacypolicy"
          component={Privacypolicy}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="mainprofile"
          component={Profilepage}
          options={{ headerShown: true }}
        />
        {/* <Stack.Screen
          name="filter"
          component={New}
          options={{ headerShown: true }}
        /> */}
        <Stack.Screen
          name="personalprofile"
          component={PersonProfilepage}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="role"
          component={SelectRole}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Moblog"
          component={Mobillogin}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="editinfo"
          component={UserInfoTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="post"
          component={SwiperCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JobProvider"
          component={JobposterDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageSelect"
          component={MessageSelect}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={UserProfileEdit}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Userprofile" component={Userprofile} />
        <Stack.Screen
          name="filter"
          component={Filterscreenmain}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Homex"
          component={ModifyHome}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="eduexp"
          component={EduInfo}
          options={{
            headerShown: true,
            title: "Add your Educational Experience",
          }}
        />
        {/* 
        <Stack.Screen
          name="eduexp"
          component={EduInfo}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="workexp"
          component={Workexperience}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={UserInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="rentalswipe"
          component={RentalSwiperCard}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Otpscreen"
          component={OtpScreen}
          options={{
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="globe-outline" size={24} color="black" />
                <DropDownLanguage />
              </View>
            ),
            title: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Root;
