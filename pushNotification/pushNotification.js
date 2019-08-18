import PushNotification from 'react-native-push-notification';
import * as AsyncStorage from '../../AsyncStorage';
import {getDeviceFingerprint} from '../../AsyncStorage';
import * as authService from '../../services/authService';
import {Actions} from 'react-native-router-flux';
import {PushNotificationIOS} from 'react-native';

class PushNotificationMobile {
  static configure() {
    PushNotification.configure({
      onRegister: function(tokenObj) {
          AsyncStorage.setPushToken(tokenObj.token);
          getDeviceFingerprint().then(deviceFingerprint => {
              authService.updatePushToken({
                  device_fingerprint: deviceFingerprint,
                  push_token: tokenObj.token
              });
          });
      },
      onNotification: function(incomeNotification) {
          const notificationCategory = incomeNotification.data.category;

          const handleNotification = transition => {
              if (incomeNotification.userInteraction) {
                  transition();
              } else {
                  notification.ref.show({
                      message: incomeNotification.message.body,
                      htmlContent: incomeNotification.data.htmlContent,
                      onPress: transition
                  })
              }
          };

          switch (notificatiosnCategory) {
              case 'network_ready':
              case 'google_network_ready':
                  handleNotification(() => {
                      Actions.yourNetwork({
                          connections_count: incomeNotification.data.connections_count
                      });
                  });
                  break;
              case 'referred_you':
                  handleNotification(() => {
                      Actions.jump('tracker', {direction: 'my', index: 0});
                      setTimeout(() => {
                          Actions.opportunityDetails({
                              jobId: incomeNotification.data.job_id,
                              direction: 'my'
                          });
                      });
                  });
                  break;
              case 'will_interview_you':
                  handleNotification(() => {
                      Actions.jump('tracker', {direction: 'my', index: 2});
                      setTimeout(() => {
                          Actions.opportunityDetails({
                              jobId: incomeNotification.data.job_id,
                              direction: 'my'
                          });
                      });
                  });
                  break;
              case 'will_interview_him':
                  handleNotification(() => {
                      Actions.jump('tracker', {direction: 'their', index: 2});
                      setTimeout(() => {
                          Actions.opportunityDetails({
                              jobId: incomeNotification.data.job_id,
                              direction: 'their',
                              referralId: incomeNotification.data.referral_id,
                              requestId: incomeNotification.data.request_id
                          });
                      });
                  });
                  break;
              case 'one_got_hired':
                  handleNotification(() => {
                      Actions.jump('tracker', {direction: 'their', index: 3});
                      setTimeout(() => {
                          Actions.opportunityDetails({
                              jobId: incomeNotification.data.job_id,
                              direction: 'their',
                              referralId: incomeNotification.data.referral_id,
                              requestId: incomeNotification.data.request_id
                          });
                      });
                  });
                  break;
              case 'you_were_hired':
                  handleNotification(() => {
                      Actions.jump('tracker', {direction: 'my', index: 3});
                      setTimeout(() => {
                          Actions.opportunityDetails({
                              jobId: incomeNotification.data.job_id,
                              direction: 'my'
                          });
                      });
                  });
                  break;
              case 'offered':
                  handleNotification(() => {
                      Actions.jump('tracker', {direction: 'my', index: 2});
                      setTimeout(() => {
                          Actions.opportunityDetails({
                              jobId: incomeNotification.data.job_id,
                              direction: 'my'
                          });
                      });
                  });
                  break;
              case 'applied_refer':
                  handleNotification(() => {
                      Actions.jump('tracker', {direction: 'their', index: 1});
                      setTimeout(() => {
                          Actions.opportunityDetails({
                              jobId: incomeNotification.data.job_id,
                              direction: 'their',
                              referralId: incomeNotification.data.referral_id,
                              requestId: incomeNotification.data.request_id
                          });
                      });
                  });
                  break;
              case 'connection_requested':
              case 'connection_connected':
              case 'connection_disconnected':
                  handleNotification(() => {
                      Actions.contactProfile({userId: incomeNotification.data.user_id})
                  });
                  break;
              case 'organization_invite':
                  handleNotification(() => {
                      Actions.organizationProfile({organizationId: incomeNotification.data.organization_id})
                  });
                  break;
          }

          // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
          incomeNotification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      requestPermissions: true
  });
  };
};

export default PushNotificationMobile
