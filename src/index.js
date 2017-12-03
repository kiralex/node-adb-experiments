import ADB from 'appium-adb';
import d from 'debug';

const debug = d('kiralex.adb.index');

const func = async () => {
  debug('func');
  const adb = await ADB.createADB();
  debug(await adb.shell('getprop ro.product.model'));
};

//zezess
func();
