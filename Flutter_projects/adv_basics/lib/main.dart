import 'package:adv_basics/start_screen.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [
                Color.fromARGB(255, 107, 65, 180),
                Color.fromARGB(255, 107, 15, 168)
              ],
            ),
          ),
          child: const StartScreen(),
        ),
      ),
    ),
  );
}
