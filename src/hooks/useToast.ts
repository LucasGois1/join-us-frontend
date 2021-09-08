import Toast from "react-native-toast-message";

export default function useNotification(type: string, text1: string, text2: string){
    const showToast: any = Toast;

    showToast.show({
        type,
        position: "top",
        text1,
        text2,
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
      });
}