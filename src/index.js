import ADB from 'appium-adb';
import d from 'debug';

const debug = d('kiralex.adb.index');

const func = async () => {
  debug('func');
  const adb = await ADB.createADB();
  try {
    await adb.waitForDevice();
    debug(await adb.shell('getprop ro.product.model'));
  } catch (err) {
    debug(err.message);
  }
};

//zezess
func();
