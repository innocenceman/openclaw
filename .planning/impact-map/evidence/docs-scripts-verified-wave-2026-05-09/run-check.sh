#!/usr/bin/env bash
set -u
name="$1"
shift
log=".planning/impact-map/evidence/docs-scripts-verified-wave-2026-05-09/logs/${name}.log"
echo "=== ${name} ===" | tee "$log"
echo "$*" | tee -a "$log"
start=$(date -u +%Y-%m-%dT%H:%M:%SZ)
echo "start=${start}" | tee -a "$log"
set +e
"$@" > >(tee -a "$log") 2> >(tee -a "$log" >&2)
status=$?
set -e
echo "exit=${status}" | tee -a "$log"
echo "end=$(date -u +%Y-%m-%dT%H:%M:%SZ)" | tee -a "$log"
exit "$status"
