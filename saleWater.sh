#!/bin/bash
#
# hxd official      Start up selected-daily Server daemon
#
# chkconfig: 2345 85 15
# description: hxd official Server (development)
#
APPHOME=/mnt/saleWater
DEAMON=$APPHOME/bin/www
LOG=$APPHOME/log
PID=$APPHOME/saleWater.pid

case "$1" in
    start)
        forever start -l $LOG/access.log -o $LOG/out.log -e $LOG/error.log --pidFile $PID -a $DEAMON
        ;;
    stop)
        forever stop --pidFile $PID $DEAMON
        ;;
    stopall)
        forever stopall --pidFile $PID
        ;;
    restartall)
        forever restartall --pidFile $PID
        ;;
    reload|restart)
        forever restart -l $LOG/access.log -o $LOG/out.log -e $LOG/error.log --pidFile $PID -a $DEAMON
        ;;
    list)
        forever list
        ;;
    *)
        echo "Usage: saleWater {start|stop|restart|reload|stopall|restartall|list}"
        exit 1
        ;;
esac
exit 0
