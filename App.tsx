import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '206745855456-jf05aidm5hj0vjtdb0vugoa6jr68dodj.apps.googleusercontent.com',
    iosClientId: '206745855456-8c1dd59ij1lj16l4ornnn4kfqh4v2272.apps.googleusercontent.com',
    androidClientId: '206745855456-9emqvakbk18h8euteq19u2250bfqc1oq.apps.googleusercontent.com',
    webClientId: '206745855456-5cng047njka26o3t5f0m4jb9c0olnint.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
  );
}