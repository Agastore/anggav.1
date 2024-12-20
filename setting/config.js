/**
 * Config file
 * Sesuaikan dengan kebutuhan anda
 * Support: wa.me/+6287717682382
 */

const fs = require("fs");
const chalk = require("chalk");

global.owner = ["6283861585742"];
global.author = "https://github.com/Agastore";
global.packname = "angga-official";
global.sessionName = "WhatsApp-Session";
global.versionbot = "1.3.0";
global.mess = {
  wait: "Loading...",
  success: "Operation Sucessfull!",
  owner: "Fitur Khusus Owner Bot",
  waitdata: "Melihat Data Terkini...",
  admin: "Fitur Khusus Admin Group!",
  private: "Fitur Khusus Private Chat!",
  group: "Fitur Digunakan Hanya Untuk Group!",
  botAdmin: "Bot Harus Menjadi Admin Terlebih Dahulu!",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
