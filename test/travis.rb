#!/usr/bin/env ruby
result = `sass src/magic.scss magic.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('magic.css')
puts "Regular compile worked successfully"
