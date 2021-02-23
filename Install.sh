#!/bin/bash
printf '\033[8;51;160t'
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
    echo -e " < |  Ω \e[38;5;33mOmega\e[30;48;5;33mWeb\e[0m\e[48;5;17m  App Installer                              //--------------------------------------------------------------------------\\  \e[0m\e[48;5;17m[\e[31mQ\e[39m]-Press to quit\e[2m  >"
    echo -e "  \|........................................................//                                                                            \\._._._._._._._._._./ "
    echo -e "  ||¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯'¯                                                                                                || "
    echo -e '  ||                                                                                                                                                         || '
    echo -e '  ||                                   ,d88`         ..d8*`                                                                                                  || '
    echo -e '  ||                                 ,d888`    ..d8P*`                                                                                                       || '
    echo -e '  ||                               ,d8888*8888*`                                                                                                             || '
    echo -e '  ||                              ,88888*8P*                                                                                                                 || '
    echo -e '  ||                     ,*      d888888*8b.                                          ________                              __      __      ___.             || '
    echo -e '  ||                  ,P       dP  *888.*888b.                                        \_____  \   _____   ____   _________ /  \    /  \ ____\_ |__           || '
    echo -e '  ||                ,8*        8    *888  `**88888b.                                   /   |   \ /     \_/ __ \ / ___\__  \\\\   \/\/   // __ \| __ \          || '
    echo -e '  ||               ,dP                *88           *88b.                             /    |    \  Y Y  \  ___// /_/  > __ \\\\        /\  ___/| \_\ \         || '
    echo -e '  ||              d8`                  *8b               *8b.                         \_______  /__|_|  /\___  >___  (____  /\__/\  /  \___  >___  /         || '
    echo -e '  ||            ,d8`                    *8.                  *88b.                            \/      \/     \/_____/     \/      \/       \/    \/          || '
    echo -e '  ||           d8P                       88.                    *88b                                                                                         || '
    echo -e '  ||         ,88P                        888                                                                                                                 || '
    echo -e '  ||        d888*       .d88P            888                                                                                                                 || '
    echo -e '  ||       d8888b..d888888*              888                                        ================================  ================================       || '
    echo -e '  ||     ,888888888888888b.              888                                        = DEMO MENU_1:                 =  =  DEMO MENU_2:                =       || '
    echo -e "  ||     ,8*;88888P*****788888888ba.      888                                       =     $( if [ $USERMENU == '1' ] && [[ $USERCHOICE == '1' ]]; then ( echo "\e[7m" ; ) fi ) 1. WWWWW  $( if [ $USERMENU == '1' ] && [[ $USERCHOICE == '1' ]]; then ( echo "\e[0m" ; ) fi )              =  =    $( if [ $USERMENU == '2' ] && [[ $USERCHOICE == '1' ]]; then ( echo "\e[7m" ; ) fi )  1. Entry  $( if [ $USERMENU == '2' ] && [[ $USERCHOICE == '1' ]]; then ( echo "\e[0m" ; ) fi )              =       || "
    echo -e "  ||    ,8;,8888*        *88888*          d88*                                      =     $( if [ $USERMENU == '1' ] && [[ $USERCHOICE == '2' ]]; then ( echo "\e[7m" ; ) fi ) 2. EEEEE  $( if [ $USERMENU == '1' ] && [[ $USERCHOICE == '2' ]]; then ( echo "\e[0m" ; ) fi )              =  =    $( if [ $USERMENU == '2' ] && [[ $USERCHOICE == '2' ]]; then ( echo "\e[7m" ; ) fi )  2. YEAAA  $( if [ $USERMENU == '2' ] && [[ $USERCHOICE == '2' ]]; then ( echo "\e[0m" ; ) fi )              =       || "
    echo -e "  ||    )8e888*          ,88888be.        888                                       =     $( if [ $USERMENU == '1' ] && [[ $USERCHOICE == '3' ]]; then ( echo "\e[7m" ; ) fi ) 3. RRRRR  $( if [ $USERMENU == '1' ] && [[ $USERCHOICE == '3' ]]; then ( echo "\e[0m" ; ) fi )              =  =    $( if [ $USERMENU == '2' ] && [[ $USERCHOICE == '3' ]]; then ( echo "\e[7m" ; ) fi )  3. BBBBB  $( if [ $USERMENU == '2' ] && [[ $USERCHOICE == '3' ]]; then ( echo "\e[0m" ; ) fi )              =       || "
    echo -e '  ||   ,d888`           ,8888888***     d888                                        ================================  ================================      || '
    echo -e '  ||  ,d88P`           ,8888888Pb.     d888`                                                                                                                 || '
    echo -e '  ||  888*            ,88888888**   .d8888*                                                                                                                  || '
    echo -e '  ||  `88            ,888888888    .d88888b                                                                                                                  || '
    echo -e '  ||   `P           ,8888888888bd888888*                                                                                                                     || '
    echo -e '  ||               d888888888888d888*                                                                                                                        || '
    echo -e '  ||                8888888888888888b.                                                                                                                       || '
    echo -e '  ||               88*. *88888888888b.        .db                                                                                                            || '
    echo -e '  ||              `888b.`8888888888888b. .d8888P                                                                                                             || '
    echo -e '  ||                **88b.`*8888888888888888888888b...                                column:'$USERC'                                               || '
    echo -e '  ||                 *888b.`*8888888888P***7888888888888e.                            row:'$USERR'                                                         || '
    echo -e '  ||                 88888b.`********.d8888b**`88888P*                                                                                                       || '
    echo -e '  ||                  `888888b     .d88888888888**`8888.                              USERMENU:'$USERMENU'                                                       || '
    echo -e '  ||                  )888888.   d888888888888P   `8888888b.                          USERCHOICE:'$USERCHOICE'                                                   || '
    echo -e '  ||                  ,88888*    d88888888888**`    `8888b                                                                                                   || '
    echo -e '  ||                 ,8888*    .8888888888P`          `888b.                                                                                                 || '
    echo -e '  ||                ,888*      888888888b...            `888P88b.                                                                                            || '
    echo -e '  ||       .db.   ,d88*        88888888888888b          `8888                                                                                                || '
    echo -e '  ||   ,d888888b.8888`         `*888888888888888888P`   `888b.                                                                                               || '
    echo -e '  ||  /*****8888b**`              `***8888P*``8888`       `8888b.                                                                                            || '
    echo -e '  ||       /**88`                 .ed8b..  .d888P`            `88888                                                                                         || '
    echo -e '  ||                            d8**888888888P*               `88b                                                                                           || '
    echo -e '  ||                           (*``,d8888***`                    `88                                                                                         || '
    echo -e '  ||                              (*`                             `88                                                                                        || '
    echo -e '  \\\\_._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._.._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._//  '
    for v in {17..21} {21..17} ; do echo -en "\e[48;5;${v}m                \e[0m" ; done ; echo
    tput cup 1 1 
    escape_char=$(printf "\u1b")
    read -rsn1 mode # get 1 character
    if [[ $mode == $escape_char ]]; then
        read -rsn2 mode # read 2 more chars
    fi
    case $mode in
        'q') echo ''; echo 'QUITTING'; i=1; exit ;;
        '[A') 
            echo ''; 
            USERR=$((USERR-1)); 
            USERCHOICE=$((USERR));
            if [ $USERR == '0' ]; 
            then
                USERR=1
                USERCHOICE=1
            fi
            #echo 'UP'
            ;;
        '[B') 
            #echo ''; 
            USERR=$((USERR+1)); 
            USERCHOICE=$((USERR));
            if [ $USERR == '4' ];  
            then
                USERR=3
                USERCHOICE=3
            fi
            #echo 'DN' 
            ;;
        '[D')
            echo ''; 
            USERC=$((USERC-1)); 
            USERMENU=$((USERC));
            if [ $USERC == '0' ]; 
            then
                USERC=1
                USERMENU=1
            fi
            #echo 'UP'
            ;;
        '[C') 
            echo ''; 
            USERC=$((USERC+1)); 
            USERMENU=$((USERC));
            if [ $USERC == '3' ]; 
            then
                USERC=2
                USERMENU=2
            fi
            #echo 'UP'
            ;;
        '')  echo ''; echo 'ENTER input'; echo '';;
        *)  echo $mode; echo 'ERR bad input'; echo '';;
    esac
done


