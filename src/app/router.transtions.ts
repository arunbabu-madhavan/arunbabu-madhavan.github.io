

import {sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const routerTransition = trigger('routerTransition', [



    transition( '* => article', [
        query(':enter', style({ position: 'fixed', width:'100%' })),
        group([  query(' :enter', 
        [
            style({ opacity: 0 , transform: 'translateY(-100%)'})
        ], 
        { optional: true }
    ),
    
    
    query(':enter', 
        [
            style({ opacity: 0, transform: 'translateY(-100%)' }),
            animate('750ms ease-in-out', style({ opacity: 1 ,transform: 'translateY(0)'}))
        ], 
        { optional: true }
    )])
    
    ]),

transition( '* => profile', [
    query(':enter', style({ position: 'fixed', width:'100%' })),
    group([  query(' :enter', 
    [
        style({ opacity: 0 , transform: 'scale(3)'})
    ], 
    { optional: true }
),


query(':enter', 
    [
        style({ opacity: 0, transform: 'scale(3)' }),
        animate('750ms ease-in-out', style({ opacity: 1 ,transform: 'scale(1)'}))
    ], 
    { optional: true }
)])

]),


transition( '* => about', [
    query(':enter', style({ position: 'fixed', width:'100%' })),
    group([  query(' :enter', 
        [
            style({ opacity: 0 , transform: 'scale(2)'})
        ], 
        { optional: true }
    ),


    query(':enter', 
        [
            style({ opacity: 0, transform: 'scale(2)' }),
            animate('750ms ease-in-out', style({ opacity: 1 ,transform: 'scale(1)'}))
        ], 
        { optional: true }
    )])


]),


transition( '* => articles', [
    query(':enter', style({ position: 'fixed', width:'100%' })),
    group([  query(' :enter', 
        [
            style({ opacity: 0 , transform: 'scale(2)'})
        ], 
        { optional: true }
    ),


    query(':enter', 
        [
            style({ opacity: 0, transform: 'scale(2)' }),
            animate('750ms ease-in-out', style({ opacity: 1 ,transform: 'scale(1)'}))
        ], 
        { optional: true }
    )])


]),






transition( '* => project', [
    query(':enter', style({  opacity: 0 , transform: 'scale(0)'})),
    group([  query(' :enter', 
        [
            style({ opacity: 1 , transform: 'scale(1)'})
        ], 
        { optional: true }
    ),

    query(':enter', 
        [
            style({ opacity: 0, transform: 'scale(0)' }),
            animate('450ms ease-in-out', style({ opacity: 1 ,transform: 'scale(1)'}))
        ], 
        { optional: true }
    )])

]),


transition( '* => projects', [
    query(':enter', style({ position: 'fixed', width:'100%' })),
    group([  query(' :enter', 
        [
            style({ opacity: 0 , transform: 'scale(0)'})
        ], 
        { optional: true }
    ),


    query(':enter', 
        [
            style({ opacity: 0, transform: 'scale(0)' }),
            animate('750ms ease-in-out', style({ opacity: 1 ,transform: 'scale(1)'}))
        ], 
        { optional: true }
    )])


]),
 
]);