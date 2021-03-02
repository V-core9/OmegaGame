#!/bin/bash
printf '\033[8;51;160t'
appver=$(ls root/Application/update.log/ | sort -V | tail -n 1)
IFS=$'\n' read -d '' -r -a lines < root/Application/app_info.txt
y=0
x=0
i=0
USERMENU=1
USERCHOICE=1
USERC=1
USERR=1
tput cup $y $x
clear
while [ $i -lt 1 ];
do
    tput cup $y $x  
    for v in {17..21} {21..17} ; do echo -en "\e[48;5;${v}m                \e[0m" ; done ; echo
    echo -e "\e[48;5;17m\e[2m  /|¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯\_._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._/¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'\\ "
    echo -e " < |  \e[0m\e[48;5;17mΩ \e[38;5;33mOmega\e[30;48;5;33mWeb\e[0m\e[48;5;17m  App Installer                              \e[48;5;17m\e[2m//--------------------------------------------------------------------------\\  \e[0m\e[48;5;17m[\e[31mQ\e[39m]-Press to quit\e[2m  >"
    echo -e "  \|........................................................//                                                                            \\._._._._._._._._._./ "
    echo -e "  ||¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯                                                                                                || "
    echo -e '  ||                                                                                                                                                         || '
    echo -e '  ||                                   ,d88`         ..d8*`                                                                                                  || '
    echo -e '  ||                                 ,d888`    ..d8P*`                                                                                                       || '
    echo -e '  ||                               ,d8888*8888*`                                                                                                             || '
    echo -e '  ||                              ,88888*8P*                                                                                                                 || '
    echo -e '  ||                     ,*      d888888*8b.                                          \e[0m\e[48;5;17m________                              __      __      ___.             \e[48;5;17m\e[2m|| '
    echo -e '  ||                  ,P       dP  *888.*888b.                                        \e[0m\e[48;5;17m\_____  \   _____   ____   _________ /  \    /  \ ____\_ |__           \e[48;5;17m\e[2m|| '
    echo -e '  ||                ,8*        8    *888  `**88888b.                                  \e[0m\e[48;5;17m /   |   \ /     \_/ __ \ / ___\__  \\\\   \/\/   // __ \| __ \          \e[48;5;17m\e[2m|| '
    echo -e '  ||               ,dP                *88           *88b.                             \e[0m\e[48;5;17m/    |    \  Y Y  \  ___// /_/  > __ \\\\        /\  ___/| \_\ \         \e[48;5;17m\e[2m|| '
    echo -e '  ||              d8`                  *8b               *8b.                         \e[0m\e[48;5;17m\_______  /__|_|  /\___  >___  (____  /\__/\  /  \___  >___  /         \e[48;5;17m\e[2m|| '
    echo -e '  ||            ,d8`                    *8.                  *88b.                    \e[0m\e[48;5;17m        \/      \/     \/_____/     \/      \/       \/    \/          \e[48;5;17m\e[2m|| '
    echo -e '  ||           d8P                       88.                    *88b                                                                                         || '
    echo -e '  ||         ,88P                        888                                                                                                                 || '
    echo -e '  ||        d888*       .d88P            888                                        ==================================================================       || '
    echo -e '  ||       d8888b..d888888*              888                                        =  Choose what you wish to achieve:                              =       || '
    echo -e '  ||     ,888888888888888b.              888                                        =                                                                =       || '
    echo -e "  ||     ,8*;88888P*****788888888ba.      888                                       =     $( if [ $USERMENU == '1' ] && [[ $USERCHOICE == '1' ]]; then ( echo "\e[0m\e[48;5;21m [>  1. Install Omega Application           <]       \e[0m\e[48;5;17m\e[2m      =" ; ) else ( echo "     1. Install Omega Application                          =" ; ) fi )       || "
    echo -e "  ||    ,8;,8888*        *88888*          d88*                                      =     $( if [ $USERMENU == '1' ] && [[ $USERCHOICE == '2' ]]; then ( echo "\e[0m\e[48;5;21m [>  2. Repair existing installation        <]       \e[0m\e[48;5;17m\e[2m      =" ; ) else ( echo "     2. Repair existing installation                       =" ; ) fi )       || "
    echo -e "  ||    )8e888*          ,88888be.        888                                       =     $( if [ $USERMENU == '1' ] && [[ $USERCHOICE == '3' ]]; then ( echo "\e[0m\e[48;5;21m [>  3. Uninstall OmegaWeb                  <]       \e[0m\e[48;5;17m\e[2m      =" ; ) else ( echo "     3. Uninstall OmegaWeb                                 =" ; ) fi )       || "
    echo -e "  ||   ,d888\`           ,8888888***     d888                                        =     $( if [ $USERMENU == '1' ] && [[ $USERCHOICE == '4' ]]; then ( echo "\e[0m\e[48;5;21m [>  4. Read Update Logs                    <]       \e[0m\e[48;5;17m\e[2m      =" ; ) else ( echo "     4. Read Update Logs                                   =" ; ) fi )       || "
    echo -e "  ||  ,d88P\`           ,8888888Pb.     d888\`                                        =     $( if [ $USERMENU == '1' ] && [[ $USERCHOICE == '5' ]]; then ( echo "\e[0m\e[48;5;21m [>  5. Exit Installer                      <]       \e[0m\e[48;5;17m\e[2m      =" ; ) else ( echo "     5. Exit Installer                                     =" ; ) fi )       || "
    echo -e '  ||  888*            ,88888888**   .d8888*                                         =                                                                =       || '
    echo -e '  ||  `88            ,888888888    .d88888b                                         ==================================================================       || '
    echo -e '  ||   `P           ,8888888888bd888888*                                                                                                                     || '
    echo -e '  ||               d888888888888d888*                                                                                                                        || '
    echo -e '  ||                8888888888888888b.                                                                                                                       || '
    echo -e '  ||               88*. *88888888888b.        .db                                                                                                            || '
    echo -e '  ||              `888b.`8888888888888b. .d8888P                                                                                                             || '
    echo -e '  ||                **88b.`*8888888888888888888888b...                                                                                                       || '
    echo -e '  ||                 *888b.`*8888888888P***7888888888888e.                                                                                                   || '
    echo -e '  ||                 88888b.`********.d8888b**`88888P*                                                                                                       || '
    echo -e '  ||                  `888888b     .d88888888888**`8888.                                                                                                     || '
    echo -e '  ||                  )888888.   d888888888888P   `8888888b.                                                                                                 || '
    echo -e '  ||                  ,88888*    d88888888888**`    `8888b                                                                                                   || '
    echo -e '  ||                 ,8888*    .8888888888P`          `888b.                                                                                                 || '
    echo -e '  ||                ,888*      888888888b...            `888P88b.                                                                                            || '
    echo -e '  ||       .db.   ,d88*        88888888888888b          `8888                                                                                                || '
    echo -e '  ||   ,d888888b.8888`         `*888888888888888888P`   `888b.                                                                                               || '
    echo -e '  ||  /*****8888b**`              `***8888P*``8888`       `8888b.                                                             \e[38;5;25m╔═\e[38;5;51m───────────────────────────\e[38;5;25m═╗\e[0m\e[48;5;17m\e[2m|| '
    echo -e "  ||       /**88\`                 .ed8b..  .d888P\`            \`88888                                                          \e[38;5;51m│\e[0m\e[48;5;17m\e[38;5;33m  ⚑ Version: $( printf "%s\n" "${appver}")        \e[38;5;51m│\e[0m\e[48;5;17m\e[2m|| "
    echo -e "  ||                            d8**888888888P*               \`88b                                                            \e[38;5;51m│\e[0m\e[48;5;17m\e[38;5;33m  ✇ CodeName: $( printf "%s\n" "${lines[0]}")  \e[38;5;51m│\e[0m\e[48;5;17m\e[2m|| "
    echo -e "  ||                           (*\`\`,d8888***\`                    \`88                                                          \e[38;5;51m│\e[0m\e[48;5;17m\e[38;5;33m  ☭ Author: $( printf "%s\n" "${lines[1]}")        \e[38;5;51m│\e[0m\e[48;5;17m\e[2m|| "
    echo -e '  ||                              (*`                             `88                                                         \e[38;5;25m╚═\e[38;5;51m───────────────────────────\e[38;5;25m═╝\e[0m\e[48;5;17m\e[2m|| '
    echo -e '  \\\\_._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._.._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._//  '
    for v in {17..21} {21..17} ; do echo -en "\e[48;5;${v}m                \e[0m" ; done ; echo
    tput cup 1 1 
    escape_char=$(printf "\u1b")
    read -rsn1 mode # get 1 character
    if [[ $mode == $escape_char ]]; then
        read -rsn2 mode # read 2 more chars
    fi
    case $mode in
        'q') 
						i=1;
						exit 
						;;
        '[A') 
            USERR=$((USERR-1)); 
            USERCHOICE=$((USERR));
            if [ $USERR == '0' ]; 
            then
                USERR=1
                USERCHOICE=1
            fi
            ;;
        '[B') 
            USERR=$((USERR+1)); 
            USERCHOICE=$((USERR));
            if [ $USERR == '6' ];  
            then
                USERR=5
                USERCHOICE=5
            fi
            ;;
        '')  
					if [ $USERCHOICE == '5' ]; 
            then
							i=1;
							exit 
            fi
					;;
        *)  echo $mode; echo 'ERR bad input'; echo '';;
    esac
done


