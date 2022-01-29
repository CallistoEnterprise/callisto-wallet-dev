"use strict";

module.exports = function accountBalanceTable(
    coldStakingService,
    coldStakingV2Service,
    $interval
) {
    return {
        template: require("./accountBalanceTable.html"),
        link: function(scope) {
            scope.progressBar = {
                width: 0,
                klass: "",
                text: ""
            };

            scope.progressBarV2 = {
                width: 0,
                klass: "",
                text: ""
            };

            scope.stakingStatus = {
                "currentStakingRound":0,
                "totalRounds":0
            };
            coldStakingV2Service.stakingStatus().then(function(response){
                    Object.assign(scope.stakingStatus,response);
            });
            scope.setProgressBar = function() {
                const _date = new Date();
                const { time: _time, amount } = coldStakingService.stakingInfo;

                if (!(0 < _time && 0 < amount)) {
                    return;
                }

                const time = new Date(_time);

                const _thresholdTime = coldStakingService.getThresholdTime();
                const thresholdTime = new Date(_thresholdTime + _time);

                const num = _date - time;
                const denom = thresholdTime - time;
                const progress = num / denom;
                const width = progress * 100;
                Object.assign(scope.progressBar, {
                    klass: 100 <= width ? "progress-bar-success" : "",
                    width: Math.min(100, Math.floor(width)),
                    elapsed: num,
                    threshold: thresholdTime,
                    remaining: thresholdTime - _date
                });
            };

            scope.setProgressBarV2 = function() {
                const _date = new Date();
                const {
                    time: _time,
                    amount: amount,
                    multiplier: multiplier,
                    end_time: end_time
                } = coldStakingV2Service.stakingInfo;

                if (!(0 < _time && 0 < amount)) {
                    return;
                }

                const time = new Date(_time);

                const _thresholdTime = coldStakingV2Service.getThresholdTime();
                const thresholdTime = new Date(_thresholdTime + _time);
                const stakingRounds = Math.ceil((end_time - _time) / _thresholdTime);
                const currentStakingRound  = Math.floor((Date.now() - _time) / _thresholdTime) + 1;

                const end_time_date = new Date(end_time);
                const num = _date - time;
                const denom = thresholdTime - time;
                const progress = num / denom;
                const width = progress * 100;

                Object.assign(scope.progressBarV2, {
                    klass: 100 <= width ? "progress-bar-success" : "",
                    width: Math.min(100, Math.floor(width)),
                    stakingRounds: stakingRounds,
                    currentStakingRound : currentStakingRound,
                    multiplier: multiplier,
                    elapsed: num,
                    stakingEndsDateStr: new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'medium' }).format(end_time_date),
                    stakingDaysLeft: ((end_time - _time) / (1000*3600 * 24)).toFixed(1),
                    threshold: thresholdTime,
                    remaining: thresholdTime - _date
                });
            };

            scope.setProgressBar();
            scope.setProgressBarV2();            

            scope.progressBarInterval = $interval(() => {
                scope.setProgressBar();
                scope.setProgressBarV2();
            }, 3000);

            scope.$on("$destroy", () => {
                $interval.cancel(scope.progressBarInterval);

                scope.progressBarInterval = null;
            });
        }
    };
};
