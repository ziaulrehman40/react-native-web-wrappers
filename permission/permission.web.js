// As on web, there is not much we can ask from users,
// there is no contacts or other kind of permissions,
// so we are just throwing error, indicating user didn't granted permission

class PermissionsWeb {
  static async request(_) {
    throw 1;
  };

  static async checkMultiple(_) {
    throw 1;
  };
};

PermissionsWeb.contacts = false;
PermissionsWeb.location = false;
PermissionsWeb.notification = false;

export default PermissionsWeb
