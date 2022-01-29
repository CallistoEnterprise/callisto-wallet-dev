// Spanish
"use strict";
var es = function() {};
es.code = "es";
es.data = {
    /* DexNS tabs */

    NAV_DexNS: "DexNS",
    NAV_Decentralized_Naming_Service: "Decentralized Naming Service",

    /* New Generics */
    x_CancelReplaceTx: "Cancel or Replace Transaction",
    x_CancelTx: "Cancel Transaction",
    x_PasswordDesc:
        "This password * encrypts * your private key. This does not act as a seed to generate your keys. **You will need this password + your private key to unlock your wallet.**",
    x_ReadMore: "Read More",
    x_ReplaceTx: "Replace Transaction",
    x_TransHash: "Transaction Hash",
    x_TXFee: "TX Fee",
    x_TxHash: "TX Hash",

    /* Check TX Status */
    NAV_CheckTxStatus: "Check TX Status",
    NAV_TxStatus: "TX Status",
    tx_Details: "Transaction Details",
    tx_Summary:
        'During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. ** This is not typically something you can do. It should not be relied upon & will only work when the TX Pools are full. [Please, read about this tool here.](https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-check-on-the-status-of-my-transaction-can-i-cancel-override-overwrite-replace-or-do-anything-once-a-transaction-has-been-sent)**',
    tx_notFound: "Transaction Not Found",
    tx_notFound_1:
        "This TX cannot be found in the TX Pool of the node you are connected to.",
    tx_notFound_2:
        'If you just sent the transaction, please wait 15 seconds and press the "Check TX Status" button again. ',
    tx_notFound_3:
        "It could still be in the TX Pool of a different node, waiting to be mined.",
    tx_notFound_4:
        "Please use the dropdown in the top-right & select a different ETH node (e.g. `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) and check again.",
    tx_foundInPending: "Pending Transaction Found",
    tx_foundInPending_1:
        "Your transaction was located in the TX Pool of the node you are connected to. ",
    tx_foundInPending_2: "It is currently pending (waiting to be mined). ",
    tx_foundInPending_3:
        'There is a chance you can "cancel" or replace this transaction. Unlock your wallet below.',
    tx_FoundOnChain: "Transaction Found",
    tx_FoundOnChain_1:
        "Your transaction was successfully mined and is on the blockchain.",
    tx_FoundOnChain_2:
        '**If you see a red `( ! )`, a `BAD INSTRUCTION` or `OUT OF GAS` error message**, it means that the transaction was not successfully *sent*. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.',
    tx_FoundOnChain_3:
        "**If you do not see any errors, your transaction was successfully sent.** Your ETH or Tokens are where you sent them. If you cannot see this ETH or Tokens credited in your other wallet / exchange account, and it has been 24+ hours since you sent, please [contact that service](https://myetherwallet.groovehq.com/knowledge_base/topics/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do). Send them the *link* to your transaction and ask them, nicely, to look into your situation.",

    /* Gen Wallet Updates */
    GEN_Help_1: "Use your",
    GEN_Help_2: "to access your account.",
    GEN_Help_3: "Your device * is * your wallet.",
    GEN_Help_4: "Guides & FAQ",
    GEN_Help_5: "How to Create a Wallet",
    GEN_Help_6: "Getting Started",
    GEN_Help_7:
        "Keep it safe · Make a backup · Don't share it with anyone · Don't lose it · It cannot be recovered if you lose it.",
    GEN_Help_8: "Not Downloading a File? ",
    GEN_Help_9: "Try using Google Chrome ",
    GEN_Help_10: "Right click & save file as. Filename: ",
    GEN_Help_11: "Don't open this file on your computer ",
    GEN_Help_12:
        "Use it to unlock your wallet via MyEtherWallet (or Mist, Geth, Parity and other wallet clients.) ",
    GEN_Help_13: "How to Back Up Your Keystore File ",
    GEN_Help_14: "What are these Different Formats? ",
    GEN_Help_15: "Preventing loss &amp; theft of your funds.",
    GEN_Help_16: "What are these Different Formats?",
    GEN_Help_17: "Why Should I?",
    GEN_Help_18: "To have a secondary backup.",
    GEN_Help_19: "In case you ever forget your password.",
    GEN_Help_20: "Cold Storage",
    GET_ConfButton: "I understand. Continue.",
    GEN_Label_5: "Save Your `Private Key`. ",
    GEN_Unlock: "Unlock your wallet to see your address",
    GAS_PRICE_Desc:
        "Gas Price is the amount you pay per unit of gas. `TX fee = gas price * gas limit` & is paid to miners for including your TX in a block. Higher the gas price = faster transaction, but more expensive. Default is `21 GWEI`.",
    GAS_LIMIT_Desc:
        "Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.",
    NONCE_Desc:
        "The nonce is the number of transactions sent from a given address. It ensures transactions are sent in order & not more than once.",
    TXFEE_Desc:
        "The TX Fee is paid to miners for including your TX in a block. Is is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://www.myetherwallet.com/helpers.html)",

    /* Navigation*/
    NAV_AddWallet: "Añadir cartera ",
    NAV_BulkGenerate: "Generar en masa ",
    NAV_Contact: "Contacto ",
    NAV_Contracts: "Contratos ",
    NAV_DeployContract: "Desplegar contrato ",
    NAV_ENS: "ENS",
    NAV_GenerateWallet_alt: "New Wallet ",
    NAV_GenerateWallet: "Generar cartera ",
    NAV_Help: "Ayuda ",
    NAV_InteractContract: "Interactuar con un contrato ",
    NAV_Multisig: "Multifirma ",
    NAV_MyWallets: "Mis carteras ",
    NAV_Offline: "Enviar sin conexión ",
    NAV_SendEther: "Enviar CLO y tokens ",
    NAV_SendTokens: "Enviar tokens ",
    NAV_SignMsg: "Firmar mensaje ",
    NAV_Swap: "Intercambiar ",
    NAV_ViewWallet: "Ver información de las carteras ",
    NAV_YourWallets: "Tus carteras ",

    /* General */
    x_Access: "Access ",
    x_AddessDesc:
        'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Puedes pensar en esto como tu "número de cuenta" o tu "clave pública". Es lo que le das a la gente para que te puedan enviar ether. Ese icono es una forma fácil de reconocer tu dirección. ',
    x_Address: "Tu dirección ",
    x_Cancel: "Cancelar ",
    x_CSV: "Archivo CSV (sin encriptar) ",
    x_Download: "Descargar ",
    x_Json: "Archivo JSON (sin encriptar) ",
    x_JsonDesc:
        "Esta es tu clave privada sin encriptar en formato JSON. Esto significa que no necesitas una contraseña, pero cualquiera que encuentre tu archivo JSON puede acceder a tu cartera y ether sin necesitar ninguna contraseña. ",
    x_Keystore: "Archivo Keystore (UTC / JSON · Recomendado · Encriptado) ",
    x_Keystore2: "Archivo Keystore (UTC / JSON) ",
    x_KeystoreDesc:
        "Este archivo Keystore/JSON concuerda con el formato usado por Mist para una fácil importación en el futuro. Es el archivo recomendado para descargar y guardar como copia de seguridad. ",
    x_MetaMask: "ClassicMask / MetaMask / Mist ",
    x_Mnemonic: "Mnemonic Phrase ",
    x_ParityPhrase: "Parity Phrase ",
    x_Password: "Contraseña ",
    x_Print: "Imprimir Cartera de Papel ",
    x_PrintDesc:
        "Consejo: Hax clic en imprimir y guardar esto como un PDF, ¡incluso si no tienes impresora! ",
    x_PrintShort: "Imprimir ",
    x_PrivKey: "Clave Privada (sin encriptar) ",
    x_PrivKey2: "Clave Privada ",
    x_PrivKeyDesc:
        "Esta es la versión en texto sin encriptar de tu clave privada, lo cual quiere decir que no hace falta contraseña. Si alguien encontrase tu clave privada sin encriptar, podrían acceder a tu cartera sin necesitar contraseña. Por esta razón, normalmente se recomiendan las versiones encriptadas. ",
    x_Save: "Guardar ",
    x_TXT: "Archivo TXT (sin encriptar) ",
    x_Wallet: "Cartera ",

    /* Header */
    MEW_Warning_1:
        "Comprueba siempre la URL antes de acceder a tu cartera o crear una cartera nueva. ¡Ten cuidado con los sitios falsos (phishing)! ",
    CX_Warning_1:
        "Asegúrate de tener **copias de seguridad externas** de cualquier cartera que almacenes aquí. Pueden ocurrir muchas cosas que te hagan perder los datos de esta extensión de Chrome; esto incluye desinstalar y volver a instalar la extensión. Esta extensión es un modo de acceder fácilmente a tus carteras, **no** una manera de respaldarlas. ",
    MEW_Tagline:
        "Cartera Ether JavaScript de código abierto ejecutado en el cliente ",
    CX_Tagline:
        "Cartera Ether JavaScript de código abierto ejecutado en el cliente extensión Chrome ",

    /* Footer */
    FOOTER_1:
        "Una herramienta de código abierto JavaScript que se ejecuta en el lado del cliente, para generar carteras y enviar transacciones Ethereum. ",
    FOOTER_1b: "Creado por ",
    FOOTER_2: "Se agradecen las donaciones: ",
    FOOTER_3: "Generación de carteras en el cliente por ",
    FOOTER_4: "Renuncia de responsabilidad ",

    /* Sidebar */
    sidebar_AccountInfo: "Información de la cuenta ",
    sidebar_AccountAddr: "Dirección de la cuenta ",
    sidebar_AccountBal: "Saldo de la cuenta ",
    sidebar_TokenBal: "Saldos de tokens ",
    sidebar_Equiv: "Valores equivalentes ",
    sidebar_TransHistory: "Historial de transacciones ",
    sidebar_donation:
        "MyEtherWallet es un servicio gratuito y de código abierto dedicado a tu privacidad y seguridad. Cuantas más donaciones recibimos, más tiempo dedicamos creando nuevas características, escuchando vuestros comentarios y proporcionando lo que queréis. Sólo somos dos personas intentando cambiar el mundo. ¿Nos ayudas? ",
    sidebar_donate: "Donar ",
    sidebar_thanks: "¡¡¡GRACIAS!!! ",
    sidebar_DisplayOnTrezor: "Display address on TREZOR",
    sidebar_DisplayOnLedger: "Display address on Ledger",

    /* Decrypt Panel */
    decrypt_Access: "¿Cómo te gustaría acceder a tu cartera? ",
    decrypt_Title: "Elige el formato de tu clave privada: ",
    decrypt_Select: "Elige una cartera: ",

    /* Add Wallet */
    ADD_Label_1: "¿Qué quieres hacer? ",
    ADD_Radio_1: "Generar nueva cartera ",
    ADD_Radio_2: "Elige tu archivo de cartera (Keystore / JSON) ",
    ADD_Radio_2_alt: "Elige tu archivo de cartera ",
    ADD_Radio_2_short: "ELIGE ARCHIVO DE CARTERA... ",
    ADD_Radio_3: "Pega/escribe tu clave privada ",
    ADD_Radio_4: "Añade una cuenta para supervisar ",
    ADD_Radio_5: "Paste/Type Your Mnemonic ",
    ADD_Radio_5_Path: "Select HD derivation path ",
    ADD_Radio_5_woTrezor: "(Jaxx, Metamask, Exodus, imToken)",
    ADD_Radio_5_withTrezor: "(Jaxx, Metamask, Exodus, imToken, TREZOR)",
    ADD_Radio_5_PathAlternative: "(Ledger)",
    ADD_Radio_5_PathTrezor: "(TREZOR)",
    ADD_Radio_5_PathCustom: "Personalizado",
    ADD_Label_2: "Crear un alias: ",
    ADD_Label_3: "Tu cartera está encriptada. Introduce tu contraseña ",
    ADD_Label_4: "Añade una cuenta para supervisar ",
    ADD_Warning_1:
        "Puedes añadir una cuenta para supervisar en la pestaña de carteras sin cargar una clave privada. Esto ** no ** significa que tengas acceso a la cartera, ni puedes transferir ether desde ésta. ",
    ADD_Label_5: "Introduce la dirección ",
    ADD_Label_6: "Desbloquea tu cartera ",
    ADD_Label_6_short: "Desbloquear ",
    ADD_Label_7: "Añadir cuenta ",
    ADD_Label_8: "Password (optional): ",

    /* Generate Wallets */
    GEN_desc: "Si quieres generar varias carteras, puedes hacerlo aquí ",
    GEN_Label_1: "Introduce una contraseña fuerte (mínimo 9 caracteres) ",
    GEN_Placeholder_1: "¡NO olvides guardar esto! ",
    GEN_SuccessMsg: "¡Enhorabuena! Se ha generado tu cartera. ",
    GEN_Label_2: "Guarda tu Keystore. No olvides tu contraseña. ",
    GEN_Label_3: "Guarda tu dirección. ",
    GEN_Label_4:
        "Opcional: Imprime tu cartera en papel o guarda una versión en código QR. ",

    /* Bulk Generate Wallets */
    BULK_Label_1: "Cantidad de carteras a generar ",
    BULK_Label_2: "Generar carteras ",
    BULK_SuccessMsg: "¡Enhorabuena! Se han generado tus carteras. ",

    /* Sending Ether and Tokens */
    SEND_addr: "Dirección de destino ",
    SEND_amount: "Cantidad a enviar ",
    SEND_amount_short: "Cantidad ",
    SEND_custom: "Personalizado ",
    SEND_gas: "Gas ",
    SEND_TransferTotal: "Enviar todo el saldo ",
    SEND_generate: "Generar transacción ",
    SEND_raw: "Transacción en bruto ",
    SEND_signed: "Transacción firmada ",
    SEND_trans: "Enviar transacción ",
    SEND_custom: "Añadir token personalizado ",
    SENDModal_Title: "¡Atención! ",
    /* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
    SENDModal_Content_1: "Vas a enviar ",
    SENDModal_Content_2: "a la dirección ",
    SENDModal_Content_3: "¿Estás seguro de que quieres hacer esto? ",
    SENDModal_Content_4:
        "NOTA: Si recibes un error, es muy probable que necesites añadir ether a tu cuenta para cubrir el coste en gas de enviar tokens. Gas se paga en ether. ",
    SENDModal_No: "No, sácame de aquí. ",
    SENDModal_Yes: "Sí, estoy seguro. Hacer la transacción. ",

    /* Tokens */
    TOKEN_Addr: "Dirección ",
    TOKEN_Symbol: "Símbolo del token ",
    TOKEN_Dec: "Decimales ",
    TOKEN_hide: "Ocultar tokens ",
    TOKEN_show: "Mostrar todos los tokens ",

    /* Send Transaction */
    TRANS_desc:
        'Si quieres enviar tokens, utiliza la página "Enviar tokens" en lugar de esta. ',
    TRANS_warning:
        'Si utilizas las funciones "Sólo ETH" o "Sólo ETC" estás enviando a través de un contrato. Algunos servicios tienen problemas aceptando estas transacciones. Leer más. ',
    TRANS_advanced: "+Avanzado: Añadir datos ",
    TRANS_data: "Datos ",
    TRANS_gas: "Límite de gas ",
    TRANS_sendInfo:
        "Una transacción estándar que utiliza 21000 gas cuesta 0.000441 ETH. Utilizamos un precio de gas de 0.000000021 ETH, ligeramente por encima del mínimo, para asegurarnos de que se mina con rapidez. Nosotros no recibimos ninguna comisión por la transacción. ",

    /* Send Transaction Modals */
    TRANSModal_Title: 'Transacciones "Sólo ETH" y "Sólo ETC" ',
    TRANSModal_Content_0:
        "Una nota sobre las distintas transacciones y servicios: ",
    TRANSModal_Content_1:
        "**ETH (transacción estándar): ** Esto genera una transacción predeterminada directamente de una dirección a otra. Utiliza gas predeterminado de 21000. Es probable que cualquier transacción de ETH enviada mediante este método se reproduzca (replay) en la cadena ETC. ",
    TRANSModal_Content_2:
        "**Sólo ETH: ** Esto envía a través del [contrato de protección contra replay de Timon Rapp (según recomienda VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) de modo que envías solamente en la cadena **ETH**. ",
    TRANSModal_Content_3:
        "**Sólo ETC: ** Esto envía a través del [contrato de protección contra replay de Timon Rapp (según recomienda VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) de modo que envías solamente en la cadena **ETC**. ",
    TRANSModal_Content_4:
        '**Coinbase y ShapeShift: ** Envía solamente utilizando transacción estándar. Si envías utilizando los contratos "Sólo ETH" o "Sólo ETC", será necesario que contactes con su equipo de soporte para que añadan manualmente el saldo o te lo devuelvan. [También puedes probar la herramienta de "split" de Shapeshift.](https://split.shapeshift.io/) ',
    TRANSModal_Content_5:
        "**Kraken y Poloniex:** No se conocen problemas. Usa cualquiera. ",
    TRANSModal_Yes: "Bien, ahora lo entiendo. ",
    TRANSModal_No: "Estoy más confundido. Ayuda, por favor. ",

    /* Offline Transaction */
    OFFLINE_Title: "Generar y enviar transacción sin conexión ",
    OFFLINE_Desc:
        "Se puede generar transacciones sin conexión en tres pasos. Debes hacer los pasos 1 y 3 en un equipo online y el paso 2 en un equipo sin conexión y aislado. Esto asegura que tus claves privadas no estén en contacto con un equipo con conexión a Internet. ",
    OFFLLINE_Step1_Title: "Paso 1: generar información (equipo conexión) ",
    OFFLINE_Step1_Button: "Generar información ",
    OFFLINE_Step1_Label_1: "Dirección de origen ",
    OFFLINE_Step1_Label_2:
        "Nota: Esta es la dirección de origen, no la dirección de destino. El nonce se genera desde la cuenta que origina la transacción. Si se está utilizando un equipo aislado, será la dirección de la cuenta de almacenaje en frío. ",
    OFFLINE_Step2_Title: "Paso 2: generar transacción (equipo sin conexión) ",
    OFFLINE_Step2_Label_1: "Dirección de destino ",
    OFFLINE_Step2_Label_2: "Valor / Cantidad a enviar ",
    OFFLINE_Step2_Label_3: "Precio del gas ",
    OFFLINE_Step2_Label_3b:
        "Esto se ha mostrado en el Paso 1 en tu equipo con conexión. ",
    OFFLINE_Step2_Label_4: "Límite de gas ",
    OFFLINE_Step2_Label_4b:
        "21000 es el límite de gas predeterminado. Cuando envías contratos o datos adicionales, puede que esto necesite ser diferente. El gas no utilizado se te devolverá. ",
    OFFLINE_Step2_Label_5: "Nonce ",
    OFFLINE_Step2_Label_5b:
        "Esto se indicó en el Paso 1 en tu equipo con conexión. ",
    OFFLINE_Step2_Label_6: "Datos ",
    OFFLINE_Step2_Label_6b:
        "Opcional. Los datos se utilizan habitualmente al enviar transacciones a contratos. ",
    OFFLINE_Step2_Label_7: "Introduce / elige tu Clave Privada / JSON. ",
    OFFLINE_Step3_Title:
        "Paso 3: Enviar / Publicar transacción (con conexión) ",
    OFFLINE_Step3_Label_1:
        'Pega aquí la transacción firmada del paso 2 y pulsa el botón "ENVIAR TRANSACCIÓN". ',

    /* Deploy Contracts */
    DEP_generate: "Generar Bytecode ",
    DEP_generated: "Bytecode generado ",
    DEP_signtx: "Firmar transacción ",
    DEP_interface: "Interfaz generada ",

    /* My Wallet */
    MYWAL_Nick: "Alias de cartera ",
    MYWAL_Address: "Dirección de cartera ",
    MYWAL_Bal: "Saldo ",
    MYWAL_Edit: "Editar ",
    MYWAL_View: "Ver ",
    MYWAL_Remove: "Eliminar ",
    MYWAL_RemoveWal: "Eliminar cartera: ",
    MYWAL_WatchOnly: "Tus cuentas de sólo visualización ",
    MYWAL_Viewing: "Viendo cartera ",
    MYWAL_Hide: "Ocultar información de cartera ",
    MYWAL_Edit_2: "Editar cartera ",
    MYWAL_Name: "Nombre de la cartera ",
    MYWAL_Content_1: "¡Atención! Estás a punto de eliminar tu cartera ",
    MYWAL_Content_2:
        "Asegúrate de haber **guardado tu clave privada y/o archivo almacén de clave y la contraseña** antes de eliminarlo. ",
    MYWAL_Content_3:
        "Si en el futuro quieres utilizar esta cartera con MyEtherWallet CX, tendrás que volver a añadirla manualmente utilizando Clave Privada/JSON y contraseña. ",

    /* View Wallet Details */
    VIEWWALLET_Subtitle:
        "Esto te permite descargar múltiples versiones de claves privadas e imprimir de nuevo tu cartera en papel. Puede que te interese hacer esto para [importar tu cuenta en Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Si quieres comprobar tu saldo, recomendamos utilizar un explorador de blockchain como [gastracker.io](https://gastracker.io/) (ETC) / [etherscan.io](https://etherscan.io/) (ETH). ",
    VIEWWALLET_Subtitle_Short:
        "Esto te permite descargar múltiples versiones de claves privadas e imprimir de nuevo tu cartera en papel. ",
    VIEWWALLET_SuccessMsg:
        "¡Enhorabuena! Estos son los detalles de tu cartera. ",
    VIEWWALLET_ShowPrivKey: "(show)",
    VIEWWALLET_HidePrivKey: "(hide)",

    /* Chrome Extension */
    CX_error_1:
        'No tienes ninguna cartera guardada. ¡Haz clic en ["Añadir cartera"](/cx-wallet.html#add-wallet) para añadir una! ',
    CX_quicksend: "Enviar ", // if no appropriate translation, just use "Send"

    /* Node Switcher */
    NODE_Title: "Configurar nodo personalizado",
    NODE_Subtitle: "Para conectar a un nodo local...",
    NODE_Warning:
        "Tu nodo debe ser HTTPS para poder conectar a él desde MyEtherWallet.com. Para conectarte a cualquier nodo, puedes [descargar el repositorio de MyEtherWallet y ejecutarlo localmente](https://github.com/kvhnuke/etherwallet/releases/latest). También puedes conseguir un certificado SSL gratuito a través de [Let's Encrypt](https://letsencrypt.org/)",
    NODE_Name: "Nombre del nodo",
    NODE_Port: "Puerto del nodo",
    NODE_CTA: "Guardar y usar nodo personalizado",

    /* Contracts */
    CONTRACT_Title: "Dirección del contrato ",
    CONTRACT_Title_2: "Seleccionar contrato existente ",
    CONTRACT_Json: "Interfaz ABI / JSON ",
    CONTRACT_Interact_Title: "Leer/escribir contrato ",
    CONTRACT_Interact_CTA: "Seleccionar una función ",
    CONTRACT_ByteCode: "Byte Code ",
    CONTRACT_Read: "LEER ",
    CONTRACT_Write: "ESCRIBIR ",

    /* Swap / Exchange */
    SWAP_rates: "Tipos de cambio actuales ",
    SWAP_init_1: "Quiero cambiar mis ",
    SWAP_init_2: " por ", // "I want to swap my X ETH for X BTC"
    SWAP_init_CTA: "Continuar", // or "Continue"
    SWAP_information: "Tu información ",
    SWAP_send_amt: "Cantidad a enviar ",
    SWAP_rec_amt: "Cantidad a recibir ",
    SWAP_your_rate: "Tu tipo de cambio ",
    SWAP_rec_add: "Tu dirección de destino ",
    SWAP_start_CTA: "Iniciar intercambio ",
    SWAP_ref_num: "Tu número de referencia ",
    SWAP_time: "Tiempo restante para enviar ",
    SWAP_elapsed: "Time elapsed since sent ",
    SWAP_progress_1: "Pedido iniciado ",
    SWAP_progress_2: "Esperando recibir tus ", // Waiting for your BTC...
    SWAP_progress_3: "¡Recibido! ", // ETH Received!
    SWAP_progress_4: "Enviando tu {{orderResult.output.currency}} ",
    SWAP_progress_5: "Pedido completado ",
    SWAP_order_CTA: "Por favor, envía ", // Please send 1 ETH...
    SWAP_unlock:
        "Desbloquea tu cartera para enviar ETH o tokens directamente desde esta página. ",

    /* Sign Message */
    MSG_message: "Mensaje ",
    MSG_date: "Fecha ",
    MSG_signature: "Firma ",
    MSG_verify: "Verificar mensaje ",
    MSG_info1:
        "Incluye la fecha actual para que la firma no se pueda volver a utilizar en otra fecha. ",
    MSG_info2:
        "Incluye tu apodo y dónde utilizas ese apodo para que otra persona no lo pueda utilizar. ",
    MSG_info3:
        "Incluye una razón específica para el mensaje para que no se pueda volver a utilizar con otra finalidad. ",

    /* Mnemonic */
    MNEM_1: "Selecciona la dirección con la que deseas interactuar. ",
    MNEM_2:
        "Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. ",
    MNEM_more: "Más direcciones ",
    MNEM_prev: "Direcciones anteriores ",

    /* Hardware wallets */
    x_Ledger: "Ledger Wallet ",
    ADD_Ledger_1: "Conecta tu Ledger Wallet ",
    ADD_Ledger_2:
        "Inicia la aplicacin Ethereum (o una aplicación de contrato) ",
    ADD_Ledger_3:
        'Comprueba que "Browser Support" está activado en "Settings" ',
    ADD_Ledger_4:
        'Si no encuentras la opción "Browser Support" en "Settings", asegúrate de tener instalado el [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
    ADD_Ledger_0a: "Volver a abrir MyEtherWallet en una conexión segura (SSL) ",
    ADD_Ledger_0b:
        "Volver a abrir MyEtherWallet usando [Chrome](https://www.google.com/chrome/browser/desktop/) u [Opera](https://www.opera.com/) ",
    ADD_Ledger_scan: "Conectar a Ledger Wallet ",

    ADD_MetaMask: "Connectar a MetaMask ",

    x_Trezor: "TREZOR ",
    ADD_Trezor_scan: "Conectar a TREZOR ",
    ADD_Trezor_select: "Esto es una semilla TREZOR ",
    x_DigitalBitbox: "Digital Bitbox ",
    ADD_DigitalBitbox_0a:
        "Volver a abrir MyEtherWallet en una conexión segura (SSL) ",
    ADD_DigitalBitbox_0b:
        "Volver a abrir MyEtherWallet usando [Chrome](https://www.google.com/chrome/browser/desktop/) u [Opera](https://www.opera.com/) ",
    ADD_DigitalBitbox_scan: "Conectar a Digital Bitbox ",

    /* Error Messages */
    ERROR_0: "Introduce una cantidad válida. ",
    ERROR_1:
        "Tu contraseña debe tener al menos 9 caracteres. Por favor utiliza una contraseña fuerte. ",
    ERROR_2: "Lo sentimos. No reconocemos este tipo de archivo de cartera. ",
    ERROR_3: "Este no es un archivo de cartera válido. ",
    ERROR_4:
        "Esta unidad no existe. Por favor utiliza una de las siguientes unidades ",
    ERROR_5: "Introduce una Dirección válida. ",
    ERROR_6: "Introduce una Contraseña válida. ",
    ERROR_7: "Introduce una Cantidad válida. (Must be integer. Try 0-18.) ", // 7
    ERROR_8:
        "Introduce un Límite de gas válido. (Must be integer. Try 21000-4000000.) ", // 8
    ERROR_9: "Introduce un Valor de datos válido. (Must be hex.) ", // 9
    ERROR_10:
        "Introduce una Cantidad de gas válida. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ",
    ERROR_11: "Introduce un Nonce válido. (Must be integer.) ", // 11
    ERROR_12: "Introduce una Transacción firmada válida. ",
    ERROR_13: "Ya existe una cartera con este alias. ",
    ERROR_14: "Cartera no encontrada. ",
    ERROR_15:
        "No parece que exista todavía una propuesta con este ID o hay un error al leer esta propuesta. ",
    ERROR_16:
        "Ya hay almacenada una cartera con esta dirección. Por favor comprueba la página de carteras. ",
    ERROR_17:
        "Fondos no suficientes para gas * precio + valor. Es necesario tener al menos 0.01 ether en tu cuenta para cubrir el coste del gas. Añade algo de ether e inténtalo de nuevo. ",
    ERROR_18:
        "Sería necesario utilizar todo el gas en esta transacción. Esto significa que ya has votado en esta propuesta o que el periodo de debate ha concluido. ",
    ERROR_19: "Introduce un Símbolo válido ",
    ERROR_20: "No es un token ERC-20 válido ",
    ERROR_21:
        "No se ha podido estimar el gas. No hay suficientes fondos en la cuenta, o el contrato de destino ha devuelto un error. Puedes ajustar el gas manualmente y continuar. Puede que el mensaje de error al enviar contenga más información. ",
    ERROR_22: "Introduce un nombre de nodo válido ",
    ERROR_23:
        "Introduce una URL válida. Si estás en HTTPS, tu URL debe ser HTTPS ",
    ERROR_24: "Introduce un puerto válido ",
    ERROR_25: "Introduce un chain ID válido ",
    ERROR_26: "Introduce un ABI válido ",
    ERROR_27: "Cantidad mínima 0.01 ",
    ERROR_28:
        "**Necesitas tu archivo Keystore/JSON y la contraseña** (o clave privada) para acceder a esta cartera en el futuro. Por favor ¡guárdala y respáldala externamente! No hay modo de recuperar una cartera si no la guardas. Lee la [página de ayuda](https://www.myetherwallet.com/#help) para instrucciones. ",
    ERROR_29: "Introduce un user & password válido. ", // 29
    ERROR_30: "Introduce un name válido (7+ characters, limited punctuation) ", // 30
    ERROR_31: "Introduce un secret phrase válido. ", // 31
    ERROR_32:
        "Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.", // 32
    ERROR_33:
        "The wallet you have unlocked does not match the owner's address. ", // 33
    ERROR_34:
        "The name you are attempting to reveal does not match the name you have entered. ", // 34
    ERROR_35:
        'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35
    ERROR_36: "Enter valid TX hash", // 36
    ERROR_37: "Enter valid hex string (0-9, a-f)", // 37

    SUCCESS_1: "Dirección válida ",
    SUCCESS_2: "Cartera descifrada con éxito ",
    SUCCESS_3:
        "Your TX has been broadcasted to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ", //'Transacción enviada. TX Hash ',
    SUCCESS_4: "Se ha añadido tu cartera ",
    SUCCESS_5: "Archivo seleccionado ",
    SUCCESS_6: "You are successfully connected ",
    SUCCESS_7: "Message Signature Verified",
    WARN_Send_Link:
        "Has llegado aquí a través de un enlace que ya tiene rellenados la dirección, cantidad, gas, campos de datos o el tipo de transacción (modo de envío). Puedes cambiar cualquier parámetro antes de enviar. Desbloquea tu cartera para comenzar. ",

    /* Geth Error Messages */
    GETH_InvalidSender: "Remitente no válido ",
    GETH_Nonce: "Nonce demasiado bajo ",
    GETH_Cheap: "Precio de gas demasiado bajo para aceptación ",
    GETH_Balance: "Saldo insuficiente ",
    GETH_NonExistentAccount:
        "La cuenta no existe o tiene un saldo insuficiente ",
    GETH_InsufficientFunds: "Fondos no suficientes para gas * precio + valor ",
    GETH_IntrinsicGas: "Gas intrínseco demasiado bajo ",
    GETH_GasLimit: "Sobrepasa el límite de gas del bloque ",
    GETH_NegativeValue: "Valor negativo ",

    /* Parity Error Messages */
    PARITY_AlreadyImported:
        "Transaction with the same hash was already imported.",
    PARITY_GasLimitExceeded:
        "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas.",
    PARITY_InsufficientBalance:
        "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} and got: {}.",
    PARITY_InsufficientGasPrice:
        "Transaction fee is too low. It does not satisfy your node's minimal fee (minimal: {}, got: {}). Try increasing the fee.",
    PARITY_InvalidGasLimit: "Supplied gas is beyond limit.",
    PARITY_LimitReached:
        "There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the fee.",
    PARITY_Old: "Transaction nonce is too low. Try incrementing the nonce.",
    PARITY_TooCheapToReplace:
        "Transaction fee is too low. There is another transaction with same nonce in the queue. Try increasing the fee or incrementing the nonce.",

    /* Tranlsation Info */
    translate_version: "0.3 ",
    Translator_Desc: "Gracias a nuestros traductores ",
    TranslatorName_1: "Ignacio Fernández del Álamo  · ",
    TranslatorAddr_1: "",
    /* Translator 1             : Insert Comments Here */
    TranslatorName_2: "Carlos Lizarraga Rodrigo ",
    TranslatorAddr_2: "",
    /* Translator 2             : Insert Comments Here */
    TranslatorName_3: "",
    TranslatorAddr_3: "",
    /* Translator 3             : Insert Comments Here */
    TranslatorName_4: "",
    TranslatorAddr_4: "",
    /* Translator 4             : Insert Comments Here */
    TranslatorName_5: "",
    TranslatorAddr_5: "",
    /* Translator 5             : Insert Comments Here */

    /* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
    HELP_Warning:
        "Si creaste una cartera -o- descargaste el repositorio antes del **31 de diciembre de 2015**, por favor comprueba tus carteras y descarga una nueva versión del repositorio. Haz clic para más información. ",
    HELP_Desc:
        "¿Echas algo en falta? ¿Tienes alguna otra pregunta? [Contacta con nosotros](mailto:support@myetherwallet.com) y no solamente contestaremos tu pregunta, sino que mejoraremos esta página para que sea más útil en el futuro. ",
    HELP_Remind_Title: "Algunos recordatorios ",
    HELP_Remind_Desc_1:
        "**Ethereum, MyEtherWallet.com y MyEtherWallet CX, así como algunas de las librerías JavaScript que utilizamos están en desarrollo activo.** Aunque hemos testeado ampliamente y decenas de miles de carteras han sido creadas exitosamente por personas en todo el planeta, siempre existe la remota posibilidad de que ocurra algo inesperado que haga que se pierdan tus ETH. Por favor no inviertas más de lo que estés dispuesto a perder y, por favor, sé cuidadoso. Si algo ocurriera, lo lamentamos, pero **no somos responsables del Ether perdido**. ",
    HELP_Remind_Desc_2:
        'MyEtherWallet.com y MyEtherWallet CX no son "carteras web". No estás creando una cuenta ni nos estás entregando tus Ether para que los guardemos. Toda tu información nunca abandona tu equipo o tu navegador. Te facilitamos que puedas crear, guardar y acceder a tu información e interactuar con la blockchain. ',
    HELP_Remind_Desc_3:
        "Si no guardas tu clave privada y contraseña, no hay modo alguno de recuperar el acceso a tu cartera o a los fondos que ésta contiene. ¡Haz copias de seguridad en múltiples ubicaciones físicas, no solamente en tu equipo! ",

    HELP_0_Title: "0) Soy nuevo. ¿Qué hago? ",
    HELP_0_Desc_1:
        "MyEtherWallet te permite generar nuevas carteras para poder almacenar tu Ether por tu cuenta en lugar de en una casa de cambio. Este proceso tiene lugar por completo en tu equipo, no en nuestros servidores. Por lo tanto, cuando generes una nueva cartera, **eres responsable de hacer una copia de seguridad**. ",
    HELP_0_Desc_2: "Crear una nueva cartera. ",
    HELP_0_Desc_3: "Hacer una copia de seguridad de la cartera. ",
    HELP_0_Desc_4:
        "Comprobar que tienes acceso a esta nueva cartera y has guardado correctamente toda la información necesaria. ",
    HELP_0_Desc_5: "Transferir Ether a la nueva cartera. ",

    HELP_1_Title: "1) ¿Cómo creo una nueva cartera? ",
    HELP_1_Desc_1: 'Ir a la página "Generar cartera". ',
    HELP_1_Desc_2:
        'Ir a la página "Añadir cartera" y seleccionar "Generar nueva cartera" ',
    HELP_1_Desc_3:
        "Introducir una contraseña fuerte. Si crees que puedes olvidarla, guárdala en un lugar seguro. Necesitarás esta contraseña para enviar transacciones. ",
    HELP_1_Desc_4: 'Haz clic en "GENERAR". ',
    HELP_1_Desc_5: "Ahora se ha generado tu cartera. ",

    HELP_2a_Title: "¿Cómo guardo/respaldo mi cartera? ",
    HELP_2a_Desc_1:
        "Deberías siempre respaldar tu cartera externamente y en varias ubicaciones físicas (como una unidad USB o en una hoja de papel). ",
    HELP_2a_Desc_2:
        "Guardar la dirección. Puedes mantenerla en privado o compartirla con otras personas. De ese modo, otras personas te podrán enviar ether. ",
    HELP_2a_Desc_3:
        "Guarda las versiones de tu clave privada. No la compartas con nadie. ¡Tu clave privada es necesaria cuando quieras tener acceso a tu ether para enviarlo! Hay tres tipos de claves privadas: ",
    HELP_2a_Desc_4:
        "Pon tu dirección, las versiones de la clave privada y la versión PDF de tu cartera en papel en una carpeta. Guárdala en tu equipo y en una unidad USB. ",
    HELP_2a_Desc_5:
        "Imprime la cartera si dispones de impresora. En caso contrario, escribe tu clave privada y tu dirección en una hoja de papel. Almacénalas en un lugar seguro y separado de tu equipo y de la unidad USB. ",
    HELP_2a_Desc_6:
        "Recuerda, debes evitar la pérdida de las claves y la contraseña frente a una pérdida o fallo en tu unidad de disco duro, unidad USB u hoja de papel. Debes tener en cuenta también la posibilidad de pérdida o daño en una zona amplia (piensa en un incendio o una inundación). ",

    HELP_2b_Title:
        "2b) ¿Cómo almaceno con seguridad/sin conexión/en frío con MyEtherWallet? ",
    HELP_2b_Desc_1:
        "Ve a nuestro github: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ",
    HELP_2b_Desc_2:
        "Haz clic en `etherwallet-vX.X.X.X.zip` en la parte inferior. ",
    HELP_2b_Desc_3:
        "Mueve el ZIP a un equipo aislado de internet (airgapped). ",
    HELP_2b_Desc_4: "Descomprímelo y haz doble clic en `index.html`. ",
    HELP_2b_Desc_5: "Genera una cartera con una contraseña fuerte. ",
    HELP_2b_Desc_6:
        "Guarda la dirección. Guarda versiones de la clave privaa. Guarda la contraseña si crees que es posible que no la recuerdes siempre en el futuro.. ",
    HELP_2b_Desc_7:
        "Almacena los papeles / USBs en múltiples ubicaciones separadas físicamente. ",
    HELP_2b_Desc_8:
        'Ve a la página "Ver Información de las Carteras" y teclea to clave privada / contraseña para asegurarte de que son correctos y puedes acceder a tu cartera. Comprueba que la dirección que has escrito coincide. ',

    HELP_3_Title: "3) ¿Cómo verifico que tengo acceso a mi nueva cartera? ",
    HELP_3_Desc_1:
        "**Antes de enviar ether a tu nueva cartera,** deberías asegurarte de que tienes acceso a ésta. ",
    HELP_3_Desc_2: 'Ve a la página "Ver Información de las Carteras". ',
    HELP_3_Desc_3:
        'Ve a la página "Ver Información de las Carteras" de MyEtherWallet.com. ',
    HELP_3_Desc_4:
        "Selecciona tu archivo de cartera -o- tu clave privada y desloquea tu cartera. ",
    HELP_3_Desc_5:
        "Si la cartera está cifrada aparecerá automáticamente una caja de texto. Introduce la contraseña. ",
    HELP_3_Desc_6: 'Haz clic en el botón "Desbloquear cartera". ',
    HELP_3_Desc_7:
        "Debería mostrarse la información de tu cartera. Puedes encontrar la dirección de tu cuenta al lado de un icono circular de colores. Este icono es una representación visual de tu dirección. Asegúrate de que esta dirección coincide con la dirección que has guardado en tu archivo de texto y con la que está en tu cartera de papel. ",
    HELP_3_Desc_8:
        "Si planeas guardar una cantidad elevada de ether, te recomendamos que primero envíes una cantidad pequeña de ether desde tu nueva cartera antes de ingresar una cantidad elevada. Envía 0.001 ether a tu nueva cartera, accede a tu cartera, envía los 0.001 ether desde tu cartera a otra dirección y asegúrate de que todo funciona bien. ",

    HELP_4_Title: "4) ¿Cómo envío ether de una cartera a otra? ",
    HELP_4_Desc_1:
        "Si planeas mover una gran cantidad de ether, deberías probar primero a enviar una pequeña cantidad a tu cartera para asegurarte de que todo funciona según lo esperado. ",
    HELP_4_Desc_2: 'Ve a la página "Enviar Ether y Tokens". ',
    HELP_4_Desc_3:
        "Selecciona tu archivo de cartera -o- tu clave privada y desbloquea tu cartera. ",
    HELP_4_Desc_4:
        "Si la cartera está cifrada aparecerá automáticamente una caja de texto. Introduce la contraseña. ",
    HELP_4_Desc_5: 'Haz clic en el botón "Desbloquear cartera". ',
    HELP_4_Desc_6:
        'Introduce la dirección a la que deseas enviar ether en el campo "Dirección de destino:". ',
    HELP_4_Desc_7:
        'Introduce la cantidad que deseas enviar. También puedes hacer clic en "Enviar todo el saldo" si quieres enviar todo el saldo de la cartera. ',
    HELP_4_Desc_9: 'Haz clic en "Generar transacción". ',
    HELP_4_Desc_10:
        "Aparecerán dos campos más. Esto es tu navegador generando la transacción. ",
    HELP_4_Desc_11:
        'Haz clic en el botón azul "Enviar transacción" que está inmediatamente debajo. ',
    HELP_4_Desc_12:
        'Aparecerá un cuadro emergente. Verifica que la cantidad y la dirección a la que estás enviando son correctos. Entonces, haz clic en el botón "Sí, estoy seguro. Hacer la transacción.". ',
    HELP_4_Desc_13:
        "Se enviará la transacción y se mostrará el ID de transacción. Puedes hacer clic en el ID de transacción para verla en la cadena de bloques. ",

    HELP_4CX_Title: "4) ¿Cómo envío ether utilizando MyEtherWallet CX? ",
    HELP_4CX_Desc_1:
        'Antes de nada, necesitas añadir una cartera. Una vez hecho, tienes dos opciones: la función "Enviar" del icono de la extensión de Chrome o la página "Enviar Ether y Tokens". ',
    HELP_4CX_Desc_2: "Envío: ",
    HELP_4CX_Desc_3: "Haz clic en el icono de la extensión de Chrome. ",
    HELP_4CX_Desc_4: 'Haz clic en el botón Click the "Enviar" button. ',
    HELP_4CX_Desc_5: "Elige la cartera desde la que quieres enviar. ",
    HELP_4CX_Desc_6:
        'Introduce la dirección a la que deseas enviar en el campo "Dirección de destino:". ',
    HELP_4CX_Desc_7:
        'Introduce la cantidad que deseas enviar. También puedes hacer clic en "Enviar todo el saldo" si quieres enviar todo el saldo de la cartera. ',
    HELP_4CX_Desc_8: 'Haz clic en "Enviar transacción". ',
    HELP_4CX_Desc_9:
        "Comprueba que la dirección y la cantidad que estás enviando son correctos. ",
    HELP_4CX_Desc_10: "Introduce la contraseña para la cartera. ",
    HELP_4CX_Desc_11: 'Haz clic en "Enviar transacción". ',
    HELP_4CX_Desc_12: 'Utilizando la página "Enviar Ether y Tokens" ',

    HELP_5_Title:
        "5) ¿Cómo ejecuto MyEtherWallet.com sin conexión/localmente? ",
    HELP_5_Desc_1:
        'Puedes ejecutar MyEtherWallet.com en tu equipo en lugar de desde los servidores de GitHub. Puedes generar una cartera totalmente sin conexión y enviar transacciones desde la página "Transacción sin conexión". ',
    HELP_5_Desc_7:
        "MyEtherWallet.com is now running entirely on your computer. ",
    HELP_5_Desc_8:
        "Por si no tienes costumbre, es necesario guardar la carpeta completa para ejecutar la página web, no solamente `index.html`. No modifiques ni muevas nada dentro de la carpeta. Si estás guardando una copia del repositorio MyEtherWallet para el futuro, recomendamos guardar únicamente el fichero ZIP para poder estar seguro de que el contenido permanezca intacto. ",
    HELP_5_Desc_9:
        "Debido a que estamos constantemente actualizando MyEtherWallet.com, recomendamos que actualices periódicamente tu versión guardada del repositorio. ",

    HELP_5CX_Title:
        "5) ¿Cómo puedo instalar esta extensión desde el repositorio en lugar de desde la Chrome Store? ",
    HELP_5CX_Desc_2: "Click on `chrome-extension-vX.X.X.X.zip` and unzip it. ",
    HELP_5CX_Desc_3:
        "Go to Google Chrome and find you settings (in the menu in the upper right). ",
    HELP_5CX_Desc_4: 'Click "Extensions" on the left. ',
    HELP_5CX_Desc_5:
        'Check the "Developer Mode" button at the top of that page. ',
    HELP_5CX_Desc_6: 'Click the "Load unpacked extension..." button. ',
    HELP_5CX_Desc_7:
        'Navigate to the now-unzipped folder that you downloaded earlier. Click "select". ',
    HELP_5CX_Desc_8:
        "The extension should now show up in your extensions and in your Chrome Extension bar. ",

    HELP_7_Title: "7) ¿Cómo envío tokens y añado tokens personalizados? ",
    HELP_7_Desc_0:
        "[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. ",
    HELP_7_Desc_1: 'Navigate to the "Enviar ether y tokens" page. ',
    HELP_7_Desc_2: "Desbloquea tu cartera. ",
    HELP_7_Desc_3:
        'Enter the address you would like to send to in the "To Address:" field. ',
    HELP_7_Desc_4: "Enter the amount you would like to send. ",
    HELP_7_Desc_5: "Select which token you would like to send. ",
    HELP_7_Desc_6: "If you do not see the token listed: ",
    HELP_7_Desc_7: 'Click "Custom". ',
    HELP_7_Desc_8:
        'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist. ',
    HELP_7_Desc_9: 'Click "Save". ',
    HELP_7_Desc_10:
        "You can now send that token as well as see it's balance in the sidebar. ",
    HELP_7_Desc_11: 'Click "Generate Transaction". ',
    HELP_7_Desc_12:
        "A couple more fields will appear. This is your browser generating the transaction. ",
    HELP_7_Desc_13: 'Click the blue "Send Transaction" button below that. ',
    HELP_7_Desc_14:
        'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
    HELP_7_Desc_15:
        "The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain. ",

    HELP_8_Title: "8) ¿Qué ocurre si vuestro sitio web deja de funcionar? ",
    HELP_8_Desc_1:
        "MyEtherWallet no es una cartera web. No tienes un login y nunca se graba nada en nuestros servidores. You don't have a login and nothing ever gets saved to our servers. Simplemente es una interfaz que te permite interactuar con la cadena de bloques. ",
    HELP_8_Desc_2:
        "Si MyEtherWallet.com desapareciera, tendrías que encontrar otra manera de poder hacer lo que haces con nosotros (como por ejemplo obtener geth o Ethereum Wallet / Mist). Pero no necesitarías retirar tus ether de MyEtherWallet porque no están en MyEtherWallet. Están en la cartera que hayas generado a través de nuestro sitio. ",
    HELP_8_Desc_3:
        "Puedes importar tu clave privada sin cifrar y tus archivos en formato Geth/Mist (cifrados) directamente en geth / Ethereum Wallet / Mist con mucha facilidad actualmente. Ver más abajo la pregunta #12. ",
    HELP_8_Desc_4:
        "Además, la probabilidad de que cerremos MyEtherWallet es casi nula. No nos cuesta prácticamente nada mantenerlo ya que no almacenamos ninguna información. Si borramos el dominio, continúa estando disponible y siempre lo estará en [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Puedes descargar desde ahí el archivo ZIP y ejecutarlo localmente. ",

    HELP_8CX_Title: "8) ¿Qué ocurre si MyEtherWallet CX desaparece? ",
    HELP_8CX_Desc_1:
        "En primer lugar, los datos se guardan en tu equipo, no en nuestros servidores. Sabemos que puede parecer confuso, pero si miras nuestra extensión de Chrome, NO estás mirando a algo almacenado en nuestros servidores en alguna parte - todo se guarda en tu equipo. ",
    HELP_8CX_Desc_2:
        "Dicho esto, es **muy importante** que respaldes toda tu información para todas las nuevas carteras generadas con MyEtherWallet CX. De este modo, si algo le ocurre a MyEtherWallet CX o a tu equipo, seguirás teniendo toda la información necesaria para poder acceder a tus ether. Ver la pregunta #2a sobre cómo respaldar tus carteras. ",
    HELP_8CX_Desc_3:
        "Si por algún motivo MyEtherWallet CX desaparece de Chrome Store, puedes encontrar el código fuente en Github y cargarlo manualmente. Ver #5 más arriba. ",

    HELP_9_Title: '9) Is the "Enviar ether y tokens" page offline? ',
    HELP_9_Desc_1:
        'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times. ',

    HELP_10_Title: "10) ¿Cómo hago una transacción sin conexión? ",
    HELP_10_Desc_1:
        'Navigate to the "Offline Transaction" page via your online computer. ',
    HELP_10_Desc_2:
        'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price. ',
    HELP_10_Desc_3:
        'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send. ',
    HELP_10_Desc_4:
        'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1. ',
    HELP_10_Desc_5:
        'Enter the "NONCE" as it was displayed to you on your online computer in step #1. ',
    HELP_10_Desc_6:
        'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you. ',
    HELP_10_Desc_7:
        "If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format. ",
    HELP_10_Desc_8:
        "Select your wallet file -or- your private key and unlock your wallet. ",
    HELP_10_Desc_9: 'Press the "GENERATE SIGNED TRANSACTION" button. ',
    HELP_10_Desc_10:
        "The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer. ",
    HELP_10_Desc_11:
        'On your online computer, paste the signed transaction into the text field in step #3 and click "Enviar Ether y Tokens". This will broadcast your transaction. ',

    HELP_12_Title:
        "12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist? ",
    HELP_12_Desc_1: "Using an Geth/Mist JSON file from MyEtherWallet v2+.... ",
    HELP_12_Desc_2: 'Go to the "View Wallet Info" page. ',
    HELP_12_Desc_3:
        "Unlock your wallet using your **encrypted** private key or JSON file. ",
    HELP_12_Desc_4: 'Go to the "My Wallets" page. ',
    HELP_12_Desc_5:
        'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet. ',
    HELP_12_Desc_6:
        'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file. ',
    HELP_12_Desc_7: "Open the Ethereum Wallet application. ",
    HELP_12_Desc_8: 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts" ',
    HELP_12_Desc_9:
        "This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder. ",
    HELP_12_Desc_10:
        'Your account should show up immediately under "Accounts." ',
    HELP_12_Desc_11: "Using your unencrypted private key... ",
    HELP_12_Desc_12:
        'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page. ',
    HELP_12_Desc_13:
        "Select your wallet file -or- enter/paste your private key to unlock your wallet. ",
    HELP_12_Desc_14: "Copy Your Private Key (unencrypted). ",
    HELP_12_Desc_15: "If you are on a Mac: ",
    HELP_12_Desc_15b: "If you are on a PC: ",
    HELP_12_Desc_16: "Open Text Edit and paste this private key. ",
    HELP_12_Desc_17:
        'Go to the menu bar and click "Format" -> "Make Plain Text". ',
    HELP_12_Desc_18:
        'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. ',
    HELP_12_Desc_19:
        "Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt` ",
    HELP_12_Desc_20:
        "This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don't forget it. ",
    HELP_12_Desc_21:
        "After successful import, delete `nothing_special_delete_me.txt` ",
    HELP_12_Desc_22:
        'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',
    HELP_12_Desc_23: "Open Notepad & paste the private key ",
    HELP_12_Desc_24:
        "Save the file as `nothing_special_delete_me.txt` at `C:` ",
    HELP_12_Desc_25:
        "Run the command, `geth account import C:\\nothing_special_delete_me.txt` ",
    HELP_12_Desc_26:
        "This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don't forget it. ",
    HELP_12_Desc_27:
        "After successful import, delete `nothing_special_delete_me.txt` ",
    HELP_12_Desc_28:
        'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',

    HELP_13_Title:
        '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? ',
    HELP_13_Desc_1:
        "This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction. ",

    HELP_14_Title:
        "14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn't do this. Is the random number generation for MyEtherWallet safe? ",
    HELP_14_Desc_1:
        "While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren't unsafe, it's just that we (and tons of other crypto experments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here's a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ",

    HELP_15_Title:
        "15) Why hasn't the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan) ",
    HELP_15_Desc_1:
        "Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. ",

    HELP_16_Title: "16) How do I check the balance of my account? ",
    HELP_16_Desc_1:
        "You can use a blockchain explorer like [gastracker.io](https://gastracker.io/) (ETC) / [etherscan.io](https://etherscan.io/) (ETH). Paste your address into the search bar and it will pull up your account and transaction history. For example, here's what our [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) looks like on etherscan.io ",

    HELP_17_Title:
        "17) Why isn't my balance showing up when I unlock my wallet? ",
    HELP_17_Desc_1:
        "This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io ",

    HELP_18_Title: "18) Where is my geth wallet file? ",

    HELP_19_Title: "19) Where is my Mist wallet file? ",
    HELP_19_Desc_1:
        'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored. ',

    HELP_20_Title: "20) Where is my pre-sale wallet file? ",
    HELP_20_Desc_1:
        'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale. ',

    HELP_21_Title:
        "21) Couldn't everybody put in random private keys, look for a balance, and send to their own account? ",
    HELP_21_Desc_1:
        "Short version: yes, but finding an account with a balance would take longer than the universe...so...no. ",
    HELP_21_Desc_2:
        "Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts. ",
    HELP_21_Desc_3:
        "In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems. ",
    HELP_21_Desc_4:
        "Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password. ",
    HELP_21_Desc_5:
        'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match. ',
    HELP_21_Desc_6:
        "If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion. ",
    HELP_21_Desc_7:
        "[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space. ",
    HELP_21_Desc_8:
        "Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person's brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that's a separate issue that can wait for another day. ",

    HELP_SecCX_Title: "Seguridad - MyEtherWallet CX ",
    HELP_SecCX_Desc_1: "¿Dónde está guardando mi información esta extensión? ",
    HELP_SecCX_Desc_2:
        "La información que guardas en esta extensión de Chrome se guarda por medio de [chrome.storage](http://chrome.storage/). - este es el mismo lugar en el que se guardan tus contraseñas cuando guardas tus contraseñas en Chrome. ",
    HELP_SecCX_Desc_3: "¿Qué información se guarda? ",
    HELP_SecCX_Desc_4:
        "La dirección, alias y clave privada se guardan en chrome.storage. La clave privada se cifra utilizando la contraseña que introdujiste al añadir la cartra. El alias y la dirección de la cartera no están cifrados. ",
    HELP_SecCX_Desc_5:
        "¿Por qué no se cifran el alias y la dirección de la cartera? ",
    HELP_SecCX_Desc_6:
        "Si cifráramos estos ítems, sería necesario que introduzcas una contraseña cada vez que quisieras comprobar el saldo de tu cuenta o vizualizar los alias. Si esto te preocupa, te recomendamos que utilices MyEtherWallet.com en lugar de esta extensión de Chrome. ",

    HELP_Sec_Title: "Seguridad ",
    HELP_Sec_Desc_1:
        'Si una de tus primeras preguntas es "¿Por qué debería confiar en estas personas?, se trata de algo bueno. Esperamos que lo que sigue te sirva de ayuda para disminuir tus preocupaciones. ',
    HELP_Sec_Desc_2:
        'Hemos estado funcionando desde agosto de 2015. Si buscas ["myetherwallet" en reddit](https://www.reddit.com/search?q=myetherwallet), puedes encontrar numerosas personas que nos utilizan con gran éxito. ',
    HELP_Sec_Desc_3:
        'No vamos a quitarte tu dinero ni a robar tus claves privadas. No hay código malicioso en este sitio. De hecho, las páginas "Generar Cartera" se ejecutan por completo en el cliente. Esto significa que todo el código se ejecuta en ** tu ordenador** y nunca se graba o se transmite a ningún lugar. ',
    HELP_Sec_Desc_4:
        "Comprueba la URL -- Este sitio se sirve a través de GitHub y puedes ver el código fuente aquí: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) a [https://www.myetherwallet.com](https://www.myetherwallet.com). ",
    HELP_Sec_Desc_5:
        "Para generar carteras, puedes descargar el [código fuente](https://github.com/kvhnuke/etherwallet/releases/latest). Ver #5 más arriba. ",
    HELP_Sec_Desc_6:
        'Haz una prueba y observa qué actividad de red ocurre. La manera más fácil de hacer esto es hacer clic con el botón derecho en la página y hacer clic en "inspeccionar elemento". Ve a la pestaña "Red". Genera una cartera de prueba. Verás que no hay actividad de red. Puede que veas algo que aparece como data:image/gif y data:image/png. Se trata de los códigos QR generándose en tu ordenador y por tu ordenador. No se ha transferido ni un solo byte. ',
    HELP_Sec_Desc_8:
        "Si no te encuentras cómodo utilizando esta herramienta, no la utilices bajo ningún concepto. Hemos creado esta herramienta como una manera útil para que la gente pueda generar carteras y hacer transacciones sin tener que utilizar la línea de comandos o ejecutar un nodo completo. De nuevo, por favor contáctanos si tienes inquietudes y responderemos lo más pronto posible. ¡Gracias! ",

    HELP_FAQ_Title: "Más respuestas útiles a preguntas frecuentes ",
    HELP_Contact_Title: "Maneras de contactar con nosotros"
};

module.exports = es;
