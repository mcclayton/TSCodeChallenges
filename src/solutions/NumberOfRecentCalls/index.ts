/**
 * NumberOfRecentCalls
 * Write a class RecentCounter to count recent requests.
 * It has only one method: ping(int t), where t represents some time in
 * milliseconds.
 * Return the number of pings that have been made from 3000 milliseconds ago
 * until now. Any ping with time in [t - 3000, t] will count,
 * including the current ping. It is guaranteed that every call to ping uses
 * a strictly larger value of `t` than before.
 */
class RecentCounter {
  pings: number[];
  constructor() {
    // Create a queue with a sliding window of 3000
    this.pings = [];
  }

  ping(t: number) {
    // Add largest element to end of queue
    this.pings.push(t);

    // Remove from beginning of queue, all elements whose value is not within
    // 3000 sliding time window
    while (this.pings[0] < t - 3000) {
      this.pings.shift();
    }

    // Elements left in queue are only the ones within a 3000 millisecond
    // time window
    return this.pings.length;
  }
};

export default RecentCounter;
